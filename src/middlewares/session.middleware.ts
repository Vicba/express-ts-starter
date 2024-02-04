import session from "express-session";
import config from "../config";

export const sessionMiddleware = session({
  secret: config.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    secure: false, // set this to true on production
  },
});
