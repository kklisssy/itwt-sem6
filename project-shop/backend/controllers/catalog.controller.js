import { Product } from "../models/product.model.js";
import { formatProduct } from "../utils/formatProduct.js";
import { ensureProductsSeeded } from "../services/seed.service.js";

export const getCatalog = async (req, res) => {
  await ensureProductsSeeded();

  const { category, limit, page } = req.query;
  const filter = category ? { category } : {};
  const parsedLimit = Number(limit);
  const parsedPage = Number(page);
  const limitNumber = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 9;
  const pageNumber = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const skip = (pageNumber - 1) * limitNumber;

  const [products, total] = await Promise.all([
    Product.find(filter).sort({ legacyId: 1 }).skip(skip).limit(limitNumber),
    Product.countDocuments(filter),
  ]);

  res.json({
    productsCatalog: products.map(formatProduct),
    pagination: {
      page: pageNumber,
      limit: limitNumber,
      total,
      pages: Math.ceil(total / limitNumber),
    },
  });
};
