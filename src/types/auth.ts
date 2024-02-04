import { Request, Response } from "express";
import { Session } from "express-session";

export interface AuthReq extends Request {
  user: {
    id: string;
    googleId: string;
    name: string;
    email: string;
  };
}

export interface AuthSession extends Session {
  isAuthenticated: boolean;
  user: {
    id: string;
    googleId: string;
    name: string;
    email: string;
  };
}

export interface AuthRequest extends Request {
  session: AuthSession;
}
