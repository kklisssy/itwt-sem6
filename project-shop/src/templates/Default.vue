<template>
  <div class="page">
    <Header />

    <main class="page-main">
      <component :is="currentPage" />
    </main>

    <Subscribe />
    <Footer />
  </div>
</template>

<script setup lang="js">
import { computed } from "vue";
import Header from "../components/Header.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";
import MainPage from "../pages/MainPage.vue";
import CatalogPage from "../pages/CatalogPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import CartPage from "../pages/CartPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import { useRouter } from "../router";

const { currentPath } = useRouter();

const pageByPath = {
  "/": MainPage,
  "/catalog": CatalogPage,
  "/product": ProductPage,
  "/cart": CartPage,
  "/registration": RegistrationPage,
};

const currentPage = computed(() => pageByPath[currentPath.value] || MainPage);
</script>

<style scoped lang="css">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-main {
  flex: 1;
}
</style>
