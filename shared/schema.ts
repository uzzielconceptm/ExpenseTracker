import { pgTable, text, serial, integer, boolean, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const earlyAccess = pgTable("early_access", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
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

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type EarlyAccess = typeof earlyAccess.$inferSelect;
export type InsertEarlyAccess = z.infer<typeof insertEarlyAccessSchema>;
