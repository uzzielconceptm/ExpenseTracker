import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertEarlyAccessSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Early access form API endpoint
  app.post("/api/early-access", async (req, res) => {
    try {
      // Validate request data using Zod schema
      const formData = insertEarlyAccessSchema.safeParse(req.body);
      
      if (!formData.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: formData.error.format() 
        });
      }
      
      // Save the early access request to storage
      const savedEntry = await storage.createEarlyAccessEntry(formData.data);
      
      return res.status(201).json({
        message: "Early access request received",
        data: savedEntry
      });
    } catch (error) {
      console.error("Error processing early access request:", error);
      return res.status(500).json({ 
        message: "Error processing your request, please try again later" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
