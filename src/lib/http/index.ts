import { createServer as createHttpServer, Server } from "http";
import { Application } from "express";

export function createFromExpressApp(app: Application): Server {
  return createHttpServer(app);
}
