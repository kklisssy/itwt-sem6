import { http } from "./http";

export const getProduct = async () => {
  const response = await http.get("/product");
  return response.data;
};
