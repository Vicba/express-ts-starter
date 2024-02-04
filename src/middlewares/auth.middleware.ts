import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/auth";
import config from "../config";

export const isAuthenticated = async (
  req: AuthRequest | any,
  res: Response,
  next: NextFunction
) => {
  if (!req.user)
    return res.status(401).json({
      message: "Unauthorized",
      redirect: config.GOOGLE.UNAUTHORIZED_REDIRECT_URL,
    });

  return next();
};

export const authenticate = () => {};
