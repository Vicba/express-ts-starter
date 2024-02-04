import express from "express";
const router = express.Router();

// Global API Routes (no authentication required)
import statusRoutes from "./status.route";
router.use(statusRoutes);

// AUTH API Routes
// import authRoutes from "./auth.route";
// router.use("/auth", authRoutes);

// Authenticate all API routes below
import { authMiddleware } from "../middlewares";
router.use(authMiddleware.isAuthenticated);

// Import API Routes
import userRoutes from "./user.route";

// Setup Authenticated API Routes
router.use("/users", userRoutes);

export default router;
