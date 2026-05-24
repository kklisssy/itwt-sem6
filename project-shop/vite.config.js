import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api/cart": "http://localhost:3001",
      "/api/catalog": "http://localhost:3001",
      "/api/home": "http://localhost:3001",
      "/api/product": "http://localhost:3001",
    },
  },
});
