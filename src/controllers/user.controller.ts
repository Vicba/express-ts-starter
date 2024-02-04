import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UserService } from "../services";

// @desc    Get me
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req: Request | any, res: Response) => {
  const userId = req.user.id;
  const me = await UserService.getMe(userId);

  res.status(200).json(me);
});
