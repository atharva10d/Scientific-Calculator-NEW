import { users, type User, type InsertUser } from "@shared/schema";
import { scores, type Score, type InsertScore } from "@shared/schema";
import { calculationHistory, type CalculationHistory, type InsertCalculationHistory } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Score related methods
  getScores(): Promise<Score[]>;
  getScoreById(id: number): Promise<Score | undefined>;
  createScore(score: Omit<InsertScore, "userId">): Promise<Score>;
  clearScores(): Promise<void>;
  
  // Calculation history methods
  getCalculationHistory(): Promise<CalculationHistory[]>;
  saveCalculationHistory(history: Omit<InsertCalculationHistory, "userId">): Promise<CalculationHistory>;
  clearCalculationHistory(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private scores: Map<number, Score>;
  private history: Map<number, CalculationHistory>;
  currentUserId: number;
  currentScoreId: number;
  currentHistoryId: number;

  constructor() {
    this.users = new Map();
    this.scores = new Map();
    this.history = new Map();
    this.currentUserId = 1;
    this.currentScoreId = 1;
    this.currentHistoryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Score related methods
  async getScores(): Promise<Score[]> {
    return Array.from(this.scores.values())
      .sort((a, b) => b.score - a.score); // Sort by score descending
  }
  
  async getScoreById(id: number): Promise<Score | undefined> {
    return this.scores.get(id);
  }
  
  async createScore(scoreData: Omit<InsertScore, "userId">): Promise<Score> {
    const id = this.currentScoreId++;
    const timestamp = new Date();
    
    const score: Score = { 
      id, 
      userId: null, 
      name: scoreData.name, 
      score: scoreData.score,
      timestamp
    };
    
    this.scores.set(id, score);
    return score;
  }
  
  async clearScores(): Promise<void> {
    this.scores.clear();
  }
  
  // Calculation history methods
  async getCalculationHistory(): Promise<CalculationHistory[]> {
    return Array.from(this.history.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // Sort by creation time
  }
  
  async saveCalculationHistory(historyData: Omit<InsertCalculationHistory, "userId">): Promise<CalculationHistory> {
    const id = this.currentHistoryId++;
    const createdAt = new Date();
    
    const historyItem: CalculationHistory = {
      id,
      userId: null,
      input: historyData.input,
      result: historyData.result,
      createdAt
    };
    
    this.history.set(id, historyItem);
    return historyItem;
  }
  
  async clearCalculationHistory(): Promise<void> {
    this.history.clear();
  }
}

export const storage = new MemStorage();
