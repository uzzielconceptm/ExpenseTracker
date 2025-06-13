import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { storage } from "./storage";
import type { User, LoginCredentials, RegisterCredentials } from "@shared/schema";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export interface AuthResult {
  success: boolean;
  user?: Omit<User, 'password'>;
  token?: string;
  error?: string;
}

export class AuthService {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  generateToken(userId: number): string {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
  }

  verifyToken(token: string): { userId: number } | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
      return decoded;
    } catch {
      return null;
    }
  }

  async createSession(userId: number): Promise<string> {
    const sessionId = nanoid();
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
    
    await storage.createSession({
      id: sessionId,
      userId,
      expiresAt,
    });

    return sessionId;
  }

  async getSessionUser(sessionId: string): Promise<User | null> {
    const session = await storage.getSession(sessionId);
    if (!session || session.expiresAt < new Date()) {
      if (session) {
        await storage.deleteSession(sessionId);
      }
      return null;
    }

    return storage.getUser(session.userId) || null;
  }

  async deleteSession(sessionId: string): Promise<void> {
    await storage.deleteSession(sessionId);
  }

  async register(credentials: RegisterCredentials): Promise<AuthResult> {
    try {
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(credentials.email);
      if (existingUser) {
        return { success: false, error: "User already exists with this email" };
      }

      const existingUsername = await storage.getUserByUsername(credentials.username);
      if (existingUsername) {
        return { success: false, error: "Username already taken" };
      }

      // Hash password and create user
      const hashedPassword = await this.hashPassword(credentials.password);
      const newUser = await storage.createUser({
        ...credentials,
        password: hashedPassword,
      });

      // Generate token and session
      const token = this.generateToken(newUser.id);
      const sessionId = await this.createSession(newUser.id);

      // Remove password from response
      const { password, ...userWithoutPassword } = newUser;

      return {
        success: true,
        user: userWithoutPassword,
        token,
      };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: "Registration failed" };
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    try {
      const user = await storage.getUserByEmail(credentials.email);
      if (!user) {
        return { success: false, error: "Invalid email or password" };
      }

      const isValidPassword = await this.verifyPassword(credentials.password, user.password);
      if (!isValidPassword) {
        return { success: false, error: "Invalid email or password" };
      }

      // Update last login
      await storage.updateUser(user.id, { lastLogin: new Date() });

      // Generate token and session
      const token = this.generateToken(user.id);
      const sessionId = await this.createSession(user.id);

      // Remove password from response
      const { password, ...userWithoutPassword } = user;

      return {
        success: true,
        user: userWithoutPassword,
        token,
      };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: "Login failed" };
    }
  }

  async logout(sessionId: string): Promise<void> {
    await this.deleteSession(sessionId);
  }
}

export const authService = new AuthService();