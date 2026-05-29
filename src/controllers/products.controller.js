import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
} from "../services/products.service.js";
import asyncHandler from "../utils/asyncHandler.js";

// controller to create a new product
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

// controller to get all products
export const getAllProductsController = asyncHandler(async (req, res) => {
  const { category } = req.query;
  let products = await getAllProductsService(category);
  res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    products: products,
  });
});

// controller to get a product by id
export const getProductByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let product = await getProductByIdService(id);
  res.status(200).json({
    success: true,
    message: "Product fetched successfully",
    product: product,
  });
});
