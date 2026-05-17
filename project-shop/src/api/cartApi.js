import { http } from "./http";

export const getCart = async () => {
  const response = await http.get("/cart.json");
  return response.data;
};
