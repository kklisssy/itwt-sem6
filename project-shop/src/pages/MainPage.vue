<template>
  <div class="home-page">
    <Hero />
    <Categories />
    <Products />
    <Feature />
  </div>
</template>


<script setup lang="js">
import Hero from "../components/sections/HeroSection.vue";
import Categories from "../components/sections/CategoriesSection.vue";
import Products from "../components/sections/ProductsSection.vue";
import Feature from "../components/sections/FeatureSection.vue";
</script>

<style scoped lang="css"></style>
