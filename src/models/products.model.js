import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than 0"],
    },
    category: {
      type: String,
      default: "Others",
      trim: true,
    },
    images: {
      type: [String],
      required: [true, "Images are required"],
      validate: {
        validator: function (images) {
          return images.length > 0;
        },
        message: "At least one image is required",
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User is required"],
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("product", productSchema);

export default productModel;
