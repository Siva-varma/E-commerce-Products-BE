import { createProductService } from "../services/products.services.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createProductController = asyncHandler(async (req, res) => {
  let productData = req.body;
  let images = req.files;
  let product = await createProductService(productData, req.user.id, images);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product: product,
  });
});
