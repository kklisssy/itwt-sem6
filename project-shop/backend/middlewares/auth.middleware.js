import jwt from "jsonwebtoken";

import { User } from "../models/user.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "project-shop-dev-secret";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token is required" });
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.userId);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
