import { http } from "./http";

export const getCatalog = async (params = {}) => {
  const response = await http.get("/catalog", { params });
  return response.data;
};
