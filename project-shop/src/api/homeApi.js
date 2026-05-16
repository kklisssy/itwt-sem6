import { http } from "./http";

export const getHome = async () => {
  const response = await http.get("/home.json");
  return response.data;
};
