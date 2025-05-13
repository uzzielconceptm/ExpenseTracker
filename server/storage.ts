import { 
  users, 
  type User, 
  type InsertUser,
  earlyAccess,
  type EarlyAccess,
  type InsertEarlyAccess
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEarlyAccessEntry(entry: InsertEarlyAccess): Promise<EarlyAccess>;
  getEarlyAccessEntries(): Promise<EarlyAccess[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private earlyAccessEntries: Map<number, EarlyAccess>;
  userCurrentId: number;
  earlyAccessCurrentId: number;

  constructor() {
    this.users = new Map();
    this.earlyAccessEntries = new Map();
    this.userCurrentId = 1;
    this.earlyAccessCurrentId = 1;
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
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEarlyAccessEntry(insertEntry: InsertEarlyAccess): Promise<EarlyAccess> {
    const id = this.earlyAccessCurrentId++;
    const createdAt = new Date();
    
    const entry: EarlyAccess = { 
      ...insertEntry, 
      id, 
      createdAt 
    };
    
    this.earlyAccessEntries.set(id, entry);
    return entry;
  }

  async getEarlyAccessEntries(): Promise<EarlyAccess[]> {
    return Array.from(this.earlyAccessEntries.values());
  }
}

export const storage = new MemStorage();
