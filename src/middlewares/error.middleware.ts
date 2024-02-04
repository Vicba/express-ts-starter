import { Request, Response, NextFunction } from "express";
import ResponseError from "../errors/ResponseError";

export const handler = (
  err: ResponseError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode =
    err instanceof ResponseError ? err.status : res.statusCode ?? 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    code: statusCode,
    stack: process.env.NODE_ENV === "dev" ? err.stack : null,
  });
};
