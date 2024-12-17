
import jwt from "jsonwebtoken";
import { User } from "../models/user_model.js";

export const Authenticate = async (req, res, next) => {
  const token = req.header("Authorization"); // Use 'Authorization' header for tokens
  if (!token) return res.status(401).json({ message: "Access denied. Please log in." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
};



