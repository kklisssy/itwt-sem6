import { http } from "./http";

export const getHome = async () => {
  const response = await http.get("/home");
  return response.data;
};
