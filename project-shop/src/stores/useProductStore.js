import { defineStore } from "pinia";
import { http } from "../api/http";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: null,
    relatedProducts: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getProduct() {
      this.loading = true;
      this.error = null;

      try {
        const response = await http.get("/product.json");

        this.product = response.data.product;
        this.relatedProducts = response.data.relatedProducts;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
