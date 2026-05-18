import { defineStore } from "pinia";
import { http } from "../api/http";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    summary: {
      subTotal: "$0",
      grandTotal: "$0",
    },
    loading: false,
    error: null,
  }),

  actions: {
    async getCart() {
      this.loading = true;
      this.error = null;

      try {
        const response = await http.get("/cart.json");

        this.items = response.data.items;
        this.summary = response.data.summary;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    updateCart(action, payload) {
      if (action === "delete") {
        this.items = this.items.filter((item) => item.id !== payload.id);
      }

      if (action === "add") {
        this.items.push(payload);
      }

      if (action === "update") {
        this.items = this.items.map((item) =>
          item.id === payload.id ? { ...item, ...payload } : item,
        );
      }
    },
  },
});
