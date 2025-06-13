import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendConfirmationEmail } from "./emailService";
import { authService } from "./authService";
import { requireAuth, optionalAuth, type AuthenticatedRequest } from "./authMiddleware";
import { 
  insertEarlyAccessSchema, 
  insertUserSchema, 
  insertAccountSchema,
  insertExpenseSchema,
  insertTimeEntrySchema,
  insertInvoiceSchema,
  categoryEnum,
  loginSchema,
  registerSchema
} from "@shared/schema";

// Helper function for API responses
const handleApiResponse = async (
  req: Request, 
  res: Response, 
  schema: z.ZodType<any>,
  dbOperation: (validatedData: any) => Promise<any>,
  successMessage: string
) => {
  try {
    // Validate request data using Zod schema
    const validatedData = schema.safeParse(req.body);
    
    if (!validatedData.success) {
      return res.status(400).json({ 
        message: "Invalid data", 
        errors: validatedData.error.format() 
      });
    }
    
    // Execute the database operation
    const result = await dbOperation(validatedData.data);
    
    return res.status(201).json({
      message: successMessage,
      data: result
    });
  } catch (error) {
    console.error(`Error processing request: ${error}`);
    return res.status(500).json({ 
      message: "Error processing your request, please try again later" 
    });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = registerSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid registration data", 
          errors: validatedData.error.format() 
        });
      }
      
      const result = await authService.register(validatedData.data);
      
      if (!result.success) {
        return res.status(400).json({ message: result.error });
      }
      
      return res.status(201).json({
        message: "Registration successful",
        user: result.user,
        token: result.token
      });
    } catch (error) {
      console.error(`Registration error: ${error}`);
      return res.status(500).json({ message: "Registration failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid login data", 
          errors: validatedData.error.format() 
        });
      }
      
      const result = await authService.login(validatedData.data);
      
      if (!result.success) {
        return res.status(401).json({ message: result.error });
      }
      
      return res.status(200).json({
        message: "Login successful",
        user: result.user,
        token: result.token
      });
    } catch (error) {
      console.error(`Login error: ${error}`);
      return res.status(500).json({ message: "Login failed" });
    }
  });

  app.post("/api/auth/logout", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      if (req.sessionId) {
        await authService.logout(req.sessionId);
      }
      
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error(`Logout error: ${error}`);
      return res.status(500).json({ message: "Logout failed" });
    }
  });

  app.get("/api/auth/me", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Not authenticated" });
      }
      
      const { password, ...userWithoutPassword } = req.user;
      
      return res.status(200).json({
        user: userWithoutPassword
      });
    } catch (error) {
      console.error(`Get current user error: ${error}`);
      return res.status(500).json({ message: "Failed to get user info" });
    }
  });
  // Early access form API endpoint
  app.post("/api/early-access", async (req, res) => {
    try {
      const validatedData = insertEarlyAccessSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }

      const result = await storage.createEarlyAccessEntry(validatedData.data);
      
      try {
        await sendConfirmationEmail(validatedData.data.email, validatedData.data.fullName);
      } catch (error) {
        console.error('Error sending confirmation email:', error);
        // Continue even if email fails
      }

      return res.status(201).json({
        message: "Early access request received",
        data: result
      });
    } catch (error) {
      console.error(`Error processing request: ${error}`);
      return res.status(500).json({
        message: "Error processing your request, please try again later"
      });
    }
  });

  // Free trial sign-up API endpoint
  app.post("/api/trial-signup", async (req, res) => {
    try {
      const trialSchema = z.object({
        fullName: z.string().min(2),
        email: z.string().email(),
        company: z.string().min(2),
      });

      const validatedData = trialSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }

      // Create user account for trial
      const userData = {
        username: validatedData.data.email,
        email: validatedData.data.email,
        fullName: validatedData.data.fullName,
        company: validatedData.data.company,
      };

      const result = await storage.createUser(userData);
      
      try {
        await sendConfirmationEmail(validatedData.data.email, validatedData.data.fullName);
      } catch (error) {
        console.error('Error sending trial confirmation email:', error);
        // Continue even if email fails
      }

      return res.status(201).json({
        message: "Free trial account created successfully",
        data: result
      });
    } catch (error) {
      console.error(`Error processing trial signup: ${error}`);
      return res.status(500).json({
        message: "Error creating trial account, please try again later"
      });
    }
  });

  // User registration endpoint with security features
  app.post("/api/users", async (req, res) => {
    await handleApiResponse(
      req, 
      res, 
      insertUserSchema, 
      (data) => storage.createUser(data),
      "User created successfully"
    );
  });

  // Account endpoints for linking financial accounts
  app.post("/api/accounts", async (req, res) => {
    await handleApiResponse(
      req, 
      res, 
      insertAccountSchema, 
      (data) => storage.createAccount(data),
      "Account linked successfully"
    );
  });

  app.get("/api/accounts", async (req, res) => {
    try {
      // Extract user ID from query params or auth token
      const userId = parseInt(req.query.userId as string);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Valid user ID required" });
      }
      
      const accounts = await storage.getUserAccounts(userId);
      return res.status(200).json({ data: accounts });
    } catch (error) {
      console.error(`Error fetching accounts: ${error}`);
      return res.status(500).json({ message: "Error retrieving accounts" });
    }
  });

  app.put("/api/accounts/:id", async (req, res) => {
    try {
      const accountId = parseInt(req.params.id);
      
      if (isNaN(accountId)) {
        return res.status(400).json({ message: "Valid account ID required" });
      }
      
      // Partial validation for update
      const validatedData = insertAccountSchema.partial().safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedAccount = await storage.updateAccount(accountId, validatedData.data);
      
      if (!updatedAccount) {
        return res.status(404).json({ message: "Account not found" });
      }
      
      return res.status(200).json({ 
        message: "Account updated successfully", 
        data: updatedAccount 
      });
    } catch (error) {
      console.error(`Error updating account: ${error}`);
      return res.status(500).json({ message: "Error updating account" });
    }
  });

  // Expense endpoints with categorization
  app.post("/api/expenses", async (req, res) => {
    await handleApiResponse(
      req, 
      res, 
      insertExpenseSchema, 
      (data) => storage.createExpense(data),
      "Expense recorded successfully"
    );
  });

  app.get("/api/expenses", async (req, res) => {
    try {
      const userId = parseInt(req.query.userId as string);
      const category = req.query.category as string;
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Valid user ID required" });
      }
      
      let expenses;
      
      if (category) {
        // Check if the category is a valid enum value
        const validCategory = Object.values(categoryEnum.enumValues).includes(category as any);
        if (validCategory) {
          expenses = await storage.getUserExpensesByCategory(userId, category);
        } else {
          return res.status(400).json({ message: "Invalid expense category" });
        }
      } else {
        expenses = await storage.getUserExpenses(userId);
      }
      
      return res.status(200).json({ data: expenses });
    } catch (error) {
      console.error(`Error fetching expenses: ${error}`);
      return res.status(500).json({ message: "Error retrieving expenses" });
    }
  });

  app.put("/api/expenses/:id", async (req, res) => {
    try {
      const expenseId = parseInt(req.params.id);
      
      if (isNaN(expenseId)) {
        return res.status(400).json({ message: "Valid expense ID required" });
      }
      
      const validatedData = insertExpenseSchema.partial().safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedExpense = await storage.updateExpense(expenseId, validatedData.data);
      
      if (!updatedExpense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      
      return res.status(200).json({ 
        message: "Expense updated successfully", 
        data: updatedExpense 
      });
    } catch (error) {
      console.error(`Error updating expense: ${error}`);
      return res.status(500).json({ message: "Error updating expense" });
    }
  });

  // Time tracking endpoints
  app.post("/api/time-entries", async (req, res) => {
    await handleApiResponse(
      req, 
      res, 
      insertTimeEntrySchema, 
      (data) => storage.createTimeEntry(data),
      "Time entry created successfully"
    );
  });

  app.get("/api/time-entries", async (req, res) => {
    try {
      const userId = parseInt(req.query.userId as string);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Valid user ID required" });
      }
      
      const timeEntries = await storage.getUserTimeEntries(userId);
      return res.status(200).json({ data: timeEntries });
    } catch (error) {
      console.error(`Error fetching time entries: ${error}`);
      return res.status(500).json({ message: "Error retrieving time entries" });
    }
  });

  app.put("/api/time-entries/:id", async (req, res) => {
    try {
      const entryId = parseInt(req.params.id);
      
      if (isNaN(entryId)) {
        return res.status(400).json({ message: "Valid time entry ID required" });
      }
      
      const validatedData = insertTimeEntrySchema.partial().safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedEntry = await storage.updateTimeEntry(entryId, validatedData.data);
      
      if (!updatedEntry) {
        return res.status(404).json({ message: "Time entry not found" });
      }
      
      return res.status(200).json({ 
        message: "Time entry updated successfully", 
        data: updatedEntry 
      });
    } catch (error) {
      console.error(`Error updating time entry: ${error}`);
      return res.status(500).json({ message: "Error updating time entry" });
    }
  });

  // Invoice endpoints
  app.post("/api/invoices", async (req, res) => {
    await handleApiResponse(
      req, 
      res, 
      insertInvoiceSchema, 
      (data) => storage.createInvoice(data),
      "Invoice created successfully"
    );
  });

  app.get("/api/invoices", async (req, res) => {
    try {
      const userId = parseInt(req.query.userId as string);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Valid user ID required" });
      }
      
      const invoices = await storage.getUserInvoices(userId);
      return res.status(200).json({ data: invoices });
    } catch (error) {
      console.error(`Error fetching invoices: ${error}`);
      return res.status(500).json({ message: "Error retrieving invoices" });
    }
  });

  app.put("/api/invoices/:id", async (req, res) => {
    try {
      const invoiceId = parseInt(req.params.id);
      
      if (isNaN(invoiceId)) {
        return res.status(400).json({ message: "Valid invoice ID required" });
      }
      
      const validatedData = insertInvoiceSchema.partial().safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedInvoice = await storage.updateInvoice(invoiceId, validatedData.data);
      
      if (!updatedInvoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }
      
      return res.status(200).json({ 
        message: "Invoice updated successfully", 
        data: updatedInvoice 
      });
    } catch (error) {
      console.error(`Error updating invoice: ${error}`);
      return res.status(500).json({ message: "Error updating invoice" });
    }
  });

  // Get expense categories (for dropdowns)
  app.get("/api/expense-categories", (req, res) => {
    return res.status(200).json({ 
      data: Object.values(categoryEnum.enumValues) 
    });
  });

  // Security endpoint - update user password/security settings
  app.put("/api/users/:id/security", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Valid user ID required" });
      }
      
      // Only allow updating security-related fields
      const securitySchema = z.object({
        password: z.string().optional(),
        twoFactorEnabled: z.boolean().optional(),
        securityQuestionHash: z.string().optional()
      });
      
      const validatedData = securitySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedUser = await storage.updateUser(userId, validatedData.data);
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't return password or security question hash
      const { password, securityQuestionHash, ...secureUser } = updatedUser;
      
      return res.status(200).json({ 
        message: "Security settings updated successfully", 
        data: secureUser 
      });
    } catch (error) {
      console.error(`Error updating security settings: ${error}`);
      return res.status(500).json({ message: "Error updating security settings" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
