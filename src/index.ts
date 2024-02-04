import { errorMiddleware } from "./middlewares";
import config from "./config";
import express from "express";
import apiRouter from "./routes";
import cookieParser from "cookie-parser";
import { sessionMiddleware } from "./middlewares/session.middleware";
import cors from "cors";

// Initializing App
const app = express();

// Setup CORS
app.use(
  cors({
    origin: config.CORS.CLIENT_ORIGIN,
    credentials: true,
  })
);

// Setup API
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Setup SESSIONS
app.use(sessionMiddleware);

// Setup API Router
app.use("/api", apiRouter);

// setup services
import { HttpService } from "./lib";
const httpServer = HttpService.createFromExpressApp(app);

// App ErrorManager
app.use(errorMiddleware.handler);

// App put to live!
httpServer.listen(config.PORT, () =>
  console.log(`Server live on port ${config.PORT}`)
);
