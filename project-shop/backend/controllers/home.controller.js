import { Product } from "../models/product.model.js";
import { ensureProductsSeeded } from "../services/seed.service.js";
import { formatProduct } from "../utils/formatProduct.js";

const homeProductIds = [1, 11, 3, 4, 12, 13];

export const getHome = async (req, res) => {
  await ensureProductsSeeded();

  const products = await Product.find({ legacyId: { $in: homeProductIds } });
  const productsByLegacyId = new Map(
    products.map((product) => [product.legacyId, product])
  );

  res.json({
    productsHome: homeProductIds
      .map((legacyId) => productsByLegacyId.get(legacyId))
      .filter(Boolean)
      .map(formatProduct),
  });
};
