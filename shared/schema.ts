import { pgTable, text, serial, integer, boolean, varchar, timestamp, decimal, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

// Enum for expense categories
export const categoryEnum = pgEnum("category", [
  "meals", 
  "travel", 
  "accommodation", 
  "supplies", 
  "services", 
  "utilities", 
  "rent", 
  "advertising", 
  "salaries", 
  "insurance", 
  "software", 
  "other"
]);

// Enum for account types
export const accountTypeEnum = pgEnum("account_type", [
  "checking",
  "savings",
  "credit",
  "investment"
]);

// Users table with security features
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(), // Will be hashed
  fullName: varchar("full_name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  mobileNumber: varchar("mobile_number", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastLogin: timestamp("last_login"),
  twoFactorEnabled: boolean("two_factor_enabled").default(false),
  securityQuestionHash: text("security_question_hash"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  expenses: many(expenses),
  timeEntries: many(timeEntries),
  invoices: many(invoices),
}));

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  fullName: true,
  email: true,
  mobileNumber: true,
});

// Linked financial accounts
export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  name: varchar("name", { length: 100 }).notNull(),
  accountType: accountTypeEnum("account_type").notNull(),
  institution: varchar("institution", { length: 100 }).notNull(),
  accountNumber: varchar("account_number", { length: 50 }).notNull(),
  balance: decimal("balance", { precision: 10, scale: 2 }).default("0"),
  lastSync: timestamp("last_sync"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const accountsRelations = relations(accounts, ({ one, many }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
  expenses: many(expenses),
}));

export const insertAccountSchema = createInsertSchema(accounts).pick({
  userId: true,
  name: true,
  accountType: true,
  institution: true,
  accountNumber: true,
  balance: true,
});

// Expenses table with categorization
export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  accountId: integer("account_id").references(() => accounts.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  date: timestamp("date").notNull(),
  category: categoryEnum("category").notNull(),
  description: text("description"),
  merchant: varchar("merchant", { length: 100 }),
  receiptUrl: text("receipt_url"), // For uploading receipts
  mileage: decimal("mileage", { precision: 8, scale: 2 }), // For mileage tracking
  isTaxDeductible: boolean("is_tax_deductible").default(false),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const expensesRelations = relations(expenses, ({ one }) => ({
  user: one(users, {
    fields: [expenses.userId],
    references: [users.id],
  }),
  account: one(accounts, {
    fields: [expenses.accountId],
    references: [accounts.id],
  }),
}));

export const insertExpenseSchema = createInsertSchema(expenses).pick({
  userId: true,
  accountId: true,
  amount: true,
  date: true,
  category: true,
  description: true,
  merchant: true,
  receiptUrl: true,
  mileage: true,
  isTaxDeductible: true,
  notes: true,
});

// Time tracking entries
export const timeEntries = pgTable("time_entries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  clientName: varchar("client_name", { length: 100 }).notNull(),
  projectName: varchar("project_name", { length: 100 }),
  taskDescription: text("task_description"),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time"),
  duration: integer("duration"), // in minutes
  hourlyRate: decimal("hourly_rate", { precision: 10, scale: 2 }),
  billable: boolean("billable").default(true),
  invoiced: boolean("invoiced").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const timeEntriesRelations = relations(timeEntries, ({ one }) => ({
  user: one(users, {
    fields: [timeEntries.userId],
    references: [users.id],
  }),
}));

export const insertTimeEntrySchema = createInsertSchema(timeEntries).pick({
  userId: true,
  clientName: true,
  projectName: true,
  taskDescription: true,
  startTime: true,
  endTime: true,
  duration: true,
  hourlyRate: true,
  billable: true,
});

// Invoices
export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  invoiceNumber: varchar("invoice_number", { length: 50 }).notNull(),
  clientName: varchar("client_name", { length: 100 }).notNull(),
  clientEmail: varchar("client_email", { length: 100 }).notNull(),
  issueDate: timestamp("issue_date").notNull(),
  dueDate: timestamp("due_date").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("draft"), // draft, sent, paid, overdue
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const invoicesRelations = relations(invoices, ({ one }) => ({
  user: one(users, {
    fields: [invoices.userId],
    references: [users.id],
  }),
}));

export const insertInvoiceSchema = createInsertSchema(invoices).pick({
  userId: true,
  invoiceNumber: true,
  clientName: true,
  clientEmail: true,
  issueDate: true,
  dueDate: true,
  amount: true,
  status: true,
  notes: true,
});

// Early access signups (keep existing table)
export const earlyAccess = pgTable("early_access", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  businessType: varchar("business_type", { length: 50 }).notNull(),
  monthlyExpenses: varchar("monthly_expenses", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertEarlyAccessSchema = createInsertSchema(earlyAccess).pick({
  fullName: true,
  email: true,
  businessType: true,
  monthlyExpenses: true,
});

// Sessions table for authentication
export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

// Type definitions
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Account = typeof accounts.$inferSelect;
export type InsertAccount = z.infer<typeof insertAccountSchema>;

export type Expense = typeof expenses.$inferSelect;
export type InsertExpense = z.infer<typeof insertExpenseSchema>;

export type TimeEntry = typeof timeEntries.$inferSelect;
export type InsertTimeEntry = z.infer<typeof insertTimeEntrySchema>;

export type Invoice = typeof invoices.$inferSelect;
export type InsertInvoice = z.infer<typeof insertInvoiceSchema>;

export type EarlyAccess = typeof earlyAccess.$inferSelect;
export type InsertEarlyAccess = z.infer<typeof insertEarlyAccessSchema>;

export type Session = typeof sessions.$inferSelect;

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(1),
  username: z.string().min(3),
});

export type LoginCredentials = z.infer<typeof loginSchema>;
export type RegisterCredentials = z.infer<typeof registerSchema>;