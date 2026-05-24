import { productsSeed } from "../data/seedData.js";
import { Product } from "../models/product.model.js";

export const ensureProductsSeeded = async () => {
  const productsCount = await Product.countDocuments();

  if (productsCount === 0) {
    await Product.insertMany(productsSeed);
  }
};
