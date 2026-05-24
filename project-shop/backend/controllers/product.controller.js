import { Product } from "../models/product.model.js";
import { ensureProductsSeeded } from "../services/seed.service.js";
import { formatProduct } from "../utils/formatProduct.js";

export const getProduct = async (req, res) => {
  await ensureProductsSeeded();

  const [product, relatedProducts] = await Promise.all([
    Product.findOne({ legacyId: 10 }),
    Product.find({ legacyId: { $in: [4, 3, 13] } }).sort({ legacyId: 1 }),
  ]);

  res.json({
    product: formatProduct(product),
    relatedProducts: relatedProducts.map(formatProduct),
  });
};
