import { http } from "./http";

const getAuthConfig = () => {
  const token = localStorage.getItem("authToken");

  return token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};
};

export const getCart = async () => {
  const response = await http.get("/cart", getAuthConfig());
  return response.data;
};

export const addCartItem = async (payload) => {
  const response = await http.post("/cart/items", payload, getAuthConfig());
  return response.data;
};

export const removeCartItem = async (productId) => {
  const response = await http.delete(`/cart/items/${productId}`, getAuthConfig());
  return response.data;
};

export const updateCartItem = async (productId, payload) => {
  const response = await http.patch(`/cart/items/${productId}`, payload, getAuthConfig());
  return response.data;
};

export const clearCartItems = async () => {
  const response = await http.delete("/cart", getAuthConfig());
  return response.data;
};
