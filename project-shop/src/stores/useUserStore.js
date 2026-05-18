import { defineStore } from "pinia";
import { http } from "../api/http";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    loyalty: {
      title: "",
      text: "",
      list: [],
    },
    loading: false,
    error: null,
  }),

  actions: {
    async getUser() {
      this.loading = true;
      this.error = null;

      try {
        const response = await http.get("/registration.json");
        this.loyalty = response.data.loyalty;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    registration(payload) {
      this.user = payload;
    },
  },
});