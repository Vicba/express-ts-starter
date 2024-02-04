import express from "express";
const router = express.Router();

// Controller Imports
import { UserController } from "../controllers";

// Middleware Imports

// Routes
router.route("/me").get(UserController.getMe);

export default router;
