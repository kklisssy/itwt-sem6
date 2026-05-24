import { http } from "./http";

export const getCart = async () => {
  const response = await http.get("/cart");
  return response.data;
};

export const addCartItem = async (payload) => {
  const response = await http.post("/cart/items", payload);
  return response.data;
};

export const removeCartItem = async (productId) => {
  const response = await http.delete(`/cart/items/${productId}`);
  return response.data;
};

export const updateCartItem = async (productId, payload) => {
  const response = await http.patch(`/cart/items/${productId}`, payload);
  return response.data;
};

export const clearCartItems = async () => {
  const response = await http.delete("/cart");
  return response.data;
};
