import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertScoreSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // All routes are prefixed with /api
  
  // GET scores
  app.get("/api/scores", async (req, res) => {
    try {
      const scores = await storage.getScores();
      res.json(scores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch scores" });
    }
  });

  // POST score
  app.post("/api/scores", async (req, res) => {
    try {
      const scoreData = req.body;
      
      // Use a more permissive schema for guest users
      const guestScoreSchema = z.object({
        name: z.string().min(1).max(50),
        score: z.number().int().min(0),
        timestamp: z.string().optional(),
      });
      
      const validatedData = guestScoreSchema.parse(scoreData);
      
      const score = await storage.createScore({
        name: validatedData.name,
        score: validatedData.score,
      });
      
      res.status(201).json(score);
    } catch (error) {
      console.error(error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid score data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create score" });
      }
    }
  });

  // DELETE all scores
  app.delete("/api/scores", async (req, res) => {
    try {
      await storage.clearScores();
      res.status(200).json({ message: "All scores cleared" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to clear scores" });
    }
  });

  // Save calculation history
  app.post("/api/history", async (req, res) => {
    try {
      const historyItem = req.body;
      
      const historySchema = z.object({
        input: z.string().min(1),
        result: z.string().min(1),
      });
      
      const validatedData = historySchema.parse(historyItem);
      
      const history = await storage.saveCalculationHistory({
        input: validatedData.input,
        result: validatedData.result,
      });
      
      res.status(201).json(history);
    } catch (error) {
      console.error(error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid history data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save calculation history" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
