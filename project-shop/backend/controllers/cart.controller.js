import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { ensureProductsSeeded } from "../services/seed.service.js";

const parsePrice = (price) => Number(String(price).replace(/[^0-9.]/g, ""));

const getOrCreateCart = async (userId) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
  }

  return cart;
};

const buildCartResponse = async (userId) => {
  const cart = await getOrCreateCart(userId);
  await cart.populate("items.product");

  const items = cart.items.map((item) => ({
    id: item.product.legacyId,
    title: item.product.title,
    price: item.product.price,
    color: item.color,
    size: item.size,
    quantity: item.quantity,
    image: item.product.image,
  }));
  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  const formattedTotal = `$${total.toFixed(2)}`;

  return {
    items,
    summary: {
      subTotal: formattedTotal,
      grandTotal: formattedTotal,
    },
  };
};

export const getCart = async (req, res) => {
  res.json(await buildCartResponse(req.user.id));
};

export const addCartItem = async (req, res) => {
  await ensureProductsSeeded();

  const { productId, quantity = 1, size = "M", color = "Default" } = req.body;
  const parsedProductId = Number(productId);
  const parsedQuantity = Number(quantity);

  if (!Number.isInteger(parsedProductId)) {
    return res.status(400).json({ message: "Product id is required" });
  }

  const product = await Product.findOne({ legacyId: parsedProductId });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const cart = await getOrCreateCart(req.user.id);
  const existingItem = cart.items.find((item) => item.product.equals(product._id));
  const quantityToAdd =
    Number.isInteger(parsedQuantity) && parsedQuantity > 0 ? parsedQuantity : 1;

  if (existingItem) {
    existingItem.quantity += quantityToAdd;
  } else {
    cart.items.push({
      product: product._id,
      quantity: quantityToAdd,
      size,
      color,
    });
  }

  await cart.save();

  return res.status(201).json(await buildCartResponse(req.user.id));
};

export const removeCartItem = async (req, res) => {
  const parsedProductId = Number(req.params.productId);

  if (!Number.isInteger(parsedProductId)) {
    return res.status(400).json({ message: "Product id is required" });
  }

  const product = await Product.findOne({ legacyId: parsedProductId });
  const cart = await getOrCreateCart(req.user.id);

  if (product) {
    cart.items = cart.items.filter((item) => !item.product.equals(product._id));
    await cart.save();
  }

  return res.json(await buildCartResponse(req.user.id));
};

export const updateCartItem = async (req, res) => {
  const parsedProductId = Number(req.params.productId);
  const parsedQuantity = Number(req.body.quantity);

  if (!Number.isInteger(parsedProductId)) {
    return res.status(400).json({ message: "Product id is required" });
  }

  if (!Number.isInteger(parsedQuantity) || parsedQuantity < 1) {
    return res.status(400).json({ message: "Quantity must be greater than 0" });
  }

  const product = await Product.findOne({ legacyId: parsedProductId });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const cart = await getOrCreateCart(req.user.id);
  const existingItem = cart.items.find((item) => item.product.equals(product._id));

  if (!existingItem) {
    return res.status(404).json({ message: "Cart item not found" });
  }

  existingItem.quantity = parsedQuantity;
  await cart.save();

  return res.json(await buildCartResponse(req.user.id));
};

export const clearCart = async (req, res) => {
  const cart = await getOrCreateCart(req.user.id);
  cart.items = [];
  await cart.save();

  return res.json(await buildCartResponse(req.user.id));
};
