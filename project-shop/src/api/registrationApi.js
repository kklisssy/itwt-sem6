import { http } from "./http";

export const getRegistration = async () => {
  const response = await http.get("/registration");
  return response.data;
};
