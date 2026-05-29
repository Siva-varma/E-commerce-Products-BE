import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductByIdController,
} from "../controllers/products.controller.js";
import { upload } from "../config/multer.js";

let productsRouter = Router();

/**
 * @description Get all products
 * @route GET /api/products
 * @access Public
 */
productsRouter.get("/", getAllProductsController);

/**
 * @description Get a product by id
 * @route GET /api/products/:id
 * @access Public
 */
productsRouter.get("/:id", getProductByIdController);

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
 * @description Update a product by id
 * @route PATCH /api/products/:id
 * @access Private
 */
productsRouter.patch(
  "/:id",
  authMiddleware,
  upload.array("images"),
  updateProductByIdController,
);

export default productsRouter;
