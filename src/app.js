import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express from "express";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Products API!");
});

// Routes for user authentication
app.use("/api/auth", authRouter);

// global error handling middleware
app.use(errorMiddleware);

export default app;
