import { http } from "./http";

export const getProduct = async () => {
  const response = await http.get("/product.json");
  return response.data;
};