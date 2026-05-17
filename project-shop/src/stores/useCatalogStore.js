import { defineStore } from "pinia";
import { http } from "../api/http";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async getCatalog({ category = "men", page = 1, limit = 9 } = {}) {
      this.loading = true;
      this.error = null;

      try {
        const response = await http.get("/catalog.json");

        let filteredProducts = response.data.productsCatalog;

        if (category) {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === category,
          );
        }

        const start = (page - 1) * limit;
        const end = start + limit;

        this.products = filteredProducts.slice(start, end);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
