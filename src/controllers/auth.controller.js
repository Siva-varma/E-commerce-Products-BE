import asyncHandler from "../utils/asyncHandler.js";
import { registerService } from "../services/auth.service.js";

// controller to register a user
export const registerController = asyncHandler(async (req, res, next) => {
  let { name, email, password } = req.body;

  let userData = { name, email, password };
  // register the user and get the user and token
  let { user, token } = await registerService(userData);

  // set token in cookie
  res.cookie("token", token);

  // send response to the client
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: user,
    token: token,
  });
});
