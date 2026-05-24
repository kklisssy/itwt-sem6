export const formatProduct = (product) => ({
  id: product.legacyId,
  title: product.title,
  collection: product.collection,
  category: product.category,
  description: product.description,
  price: product.price,
  image: product.image,
});
