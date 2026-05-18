import { defineStore } from "pinia";
import { http } from "../api/http";

export const useHomeStore = defineStore("home", {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getHome() {
      this.loading = true;
      this.error = null;

      try {
        const response = await http.get("/home.json");
        this.products = response.data.productsHome;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});