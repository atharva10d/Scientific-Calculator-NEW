import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
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

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Historical calculations
export const calculationHistory = pgTable("calculation_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  input: text("input").notNull(),
  result: text("result").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCalculationHistorySchema = createInsertSchema(calculationHistory).pick({
  userId: true,
  input: true,
  result: true,
});

export type InsertCalculationHistory = z.infer<typeof insertCalculationHistorySchema>;
export type CalculationHistory = typeof calculationHistory.$inferSelect;

// Challenge scores
export const scores = pgTable("scores", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  score: integer("score").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertScoreSchema = createInsertSchema(scores).pick({
  userId: true,
  name: true,
  score: true,
});

export type InsertScore = z.infer<typeof insertScoreSchema>;
export type Score = typeof scores.$inferSelect;
