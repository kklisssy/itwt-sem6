import axios from "axios";

const authHttp = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL || "/api",
  timeout: 5000,
});

export const registerUser = async (payload) => {
  const response = await authHttp.post("/auth/register", payload);
  return response.data;
};

export const loginUser = async (payload) => {
  const response = await authHttp.post("/auth/login", payload);
  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await authHttp.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
