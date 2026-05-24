import { http } from "./http";

export const getProduct = async (params = {}) => {
  const response = await http.get("/product", { params });
  return response.data;
};
