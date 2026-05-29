import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createProductController,
  getAllProductsController,
} from "../controllers/products.controller.js";
import { upload } from "../config/multer.js";

let productsRouter = Router();

/**
 * @description Create a new product
 * @route POST /api/products
 * @access Private
 */
productsRouter.post(
  "/",
  authMiddleware,
  upload.array("images"),
  createProductController,
);

/**
 * @description Get all products
 * @route GET /api/products
 * @access Public
 */
productsRouter.get("/", getAllProductsController);

export default productsRouter;
