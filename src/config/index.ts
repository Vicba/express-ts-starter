import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

type Config = {
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
  CORS: {
    CLIENT_ORIGIN: string;
  };
  GOOGLE: {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    CALLBACK_URL: string;
    POST_LOGOUT_REDIRECT_URL: string;
    LOGIN_FAILURE_REDIRECT_URL: string;
    LOGIN_SUCCESS_REDIRECT_URL: string;
    UNAUTHORIZED_REDIRECT_URL: string;
  };
};

const config: Config = {
  PORT: Number(process.env.PORT) || 5000,
  JWT_SECRET: String(process.env.JWT_SECRET) || uuidv4(),
  JWT_EXPIRATION: String(process.env.JWT_EXPIRATION) || "30d",
  CORS: {
    CLIENT_ORIGIN:
      String(process.env.CORS_CLIENT_ORIGIN) || "http://localhost:3000",
  },
  GOOGLE: {
    CLIENT_ID: String(process.env.GOOGLE_CLIENT_ID),
    CLIENT_SECRET: String(process.env.GOOGLE_CLIENT_SECRET),
    CALLBACK_URL: String(process.env.GOOGLE_CALLBACK_URL),
    POST_LOGOUT_REDIRECT_URL: String(
      process.env.GOOGLE_POST_LOGOUT_REDIRECT_URL
    ),
    LOGIN_FAILURE_REDIRECT_URL: String(
      process.env.GOOGLE_LOGIN_FAILURE_REDIRECT_URL
    ),
    LOGIN_SUCCESS_REDIRECT_URL: String(
      process.env.GOOGLE_LOGIN_SUCCESS_REDIRECT_URL
    ),
    UNAUTHORIZED_REDIRECT_URL: String(
      process.env.GOOGLE_UNAUTHORIZED_REDIRECT_URL
    ),
  },
};

export default config;
