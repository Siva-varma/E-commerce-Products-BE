import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller.js";

let authRouter = Router();
/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
authRouter.post("/register", registerController);

/**
 * @description Login a user
 * @route POST /api/auth/login
 * @access Public
 */
authRouter.post("/login", loginController);

export default authRouter;
