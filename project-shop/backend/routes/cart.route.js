import { Router } from "express";

import {
  addCartItem,
  clearCart,
  getCart,
  removeCartItem,
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/", getCart);
router.post("/items", addCartItem);
router.delete("/items/:productId", removeCartItem);
router.delete("/", clearCart);

export default router;
