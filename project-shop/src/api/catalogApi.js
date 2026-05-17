import { http } from "./http";

export const getCatalog = async () => {
  const response = await http.get("/catalog.json");
  return response.data;
};
