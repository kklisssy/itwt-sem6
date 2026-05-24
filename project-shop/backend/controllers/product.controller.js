import { Product } from "../models/product.model.js";
import { ensureProductsSeeded } from "../services/seed.service.js";
import { formatProduct } from "../utils/formatProduct.js";

export const getProduct = async (req, res) => {
  await ensureProductsSeeded();

  const parsedProductId = Number(req.query.id);
  const productId = Number.isInteger(parsedProductId) ? parsedProductId : 10;
  const [product, relatedProducts, productIds] = await Promise.all([
    Product.findOne({ legacyId: productId }),
    Product.find({ legacyId: { $ne: productId } })
      .sort({ legacyId: 1 })
      .limit(3),
    Product.find().sort({ legacyId: 1 }).select("legacyId"),
  ]);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const ids = productIds.map((item) => item.legacyId);
  const currentIndex = ids.indexOf(product.legacyId);
  const previousProductId = ids[(currentIndex - 1 + ids.length) % ids.length];
  const nextProductId = ids[(currentIndex + 1) % ids.length];

  res.json({
    product: formatProduct(product),
    relatedProducts: relatedProducts.map(formatProduct),
    previousProductId,
    nextProductId,
  });
};
