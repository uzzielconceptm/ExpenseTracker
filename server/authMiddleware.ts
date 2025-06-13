import type { Request, Response, NextFunction } from "express";
import { authService } from "./authService";
import type { User } from "@shared/schema";

export interface AuthenticatedRequest extends Request {
  user?: User;
  sessionId?: string;
}

export async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const sessionId = req.headers['x-session-id'] as string;

    if (!token && !sessionId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    let user: User | null = null;

    // Try token-based authentication first
    if (token) {
      const decoded = authService.verifyToken(token);
      if (decoded) {
        user = await authService.getSessionUser(decoded.userId.toString());
      }
    }

    // Try session-based authentication
    if (!user && sessionId) {
      user = await authService.getSessionUser(sessionId);
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid or expired authentication" });
    }

    req.user = user;
    req.sessionId = sessionId;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}

export async function optionalAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const sessionId = req.headers['x-session-id'] as string;

    if (token || sessionId) {
      let user: User | null = null;

      if (token) {
        const decoded = authService.verifyToken(token);
        if (decoded) {
          user = await authService.getSessionUser(decoded.userId.toString());
        }
      }

      if (!user && sessionId) {
        user = await authService.getSessionUser(sessionId);
      }

      if (user) {
        req.user = user;
        req.sessionId = sessionId;
      }
    }

    next();
  } catch (error) {
    console.error('Optional auth middleware error:', error);
    next();
  }
}