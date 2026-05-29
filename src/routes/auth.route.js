import { Router } from "express";
import { registerController } from "../controllers/auth.controller.js";

let authRouter = Router();

authRouter.post("/register", registerController);

export default authRouter;
