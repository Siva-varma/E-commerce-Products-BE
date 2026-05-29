import apiError from "../utils/apiError.js";
import sendFilesToImageKit from "../config/imagekit.js";
import productModel from "../models/products.model.js";

// service to create a new product
export const createProductService = async (productData, userId, images) => {
  let { name, description, price, category } = productData;

  // check if all fields are required
  if (!name || !price) {
    throw new apiError(400, "All fields are required");
  }

  // check if images are required
  if (!images || images.length === 0) {
    throw new apiError(400, "At least one image is required");
  }

  // send images to imagekit and get the image urls
  let imageUrls = [];
  for (let image of images) {
    const uploaded = await sendFilesToImageKit(
      image.buffer,
      image.originalname,
    );
    imageUrls.push(uploaded.url);
  }

  // create a new product on db
  let product = await productModel.create({
    name,
    description,
    price,
    category,
    images: imageUrls,
    userId: userId,
  });
  return product;
};

// service to get all products
export const getAllProductsService = async (category) => {
  let query = {};
  if (category) {
    query.category = category;
  }
  // find all products and populate the userId field with the name of the user
  let products = await productModel.find(query).populate("userId", "name");
  return products;
};
