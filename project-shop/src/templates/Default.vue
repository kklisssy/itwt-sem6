<template>
  <div class="page">
    <Header />

    <main class="page-main">
      <ProductPage />
    </main>

    <Subscribe />
    <Footer />
  </div>
</template>

<script setup lang="js">
import Header from "../components/Header.vue";
import ProductPage from "../pages/ProductPage.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";
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
