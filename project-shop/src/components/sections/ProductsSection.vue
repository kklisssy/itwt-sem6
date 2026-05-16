<template>
  <section class="products">
    <div class="container">
      <div class="products-heading">
        <h2 class="products-title">Featured Items</h2>
        <p class="products-text">
          Shop for items based on what we featured in this week
        </p>
      </div>

      <div class="products-grid">
        <ProductCard
          v-for="product in productsHome"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="products-actions">
        <button class="products-button" type="button">
          Browse All Product
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { ref, onMounted } from "vue";
import ProductCard from "../product/ProductCard.vue";
import { getHome } from "../../api/homeApi";

const productsHome = ref([]);

onMounted(async () => {
  const data = await getHome();
  productsHome.value = data.productsHome;
});
</script>

<style scoped lang="css">
.products {
  padding-bottom: 95px;
}

.products-heading {
  margin-bottom: 48px;
  text-align: center;
  line-height: 1.2;
}

.products-heading h2 {
  margin: 0 0 6px;
  font-size: 30px;
  font-weight: 400;
  color: var(--color-text);
}

.products-heading p {
  margin: 0;
  font-size: 14px;
  color: #9f9f9f;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.products-actions {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.products-button {
  min-width: 212px;
  min-height: 48px;
  padding: 14px 24px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 16px;
  line-height: 1.2;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.products-button:hover {
  background-color: var(--color-accent);
  color: #ffffff;
}

@media (max-width: 1599px) {
  .products {
    padding-bottom: 65px;
  }

  .products-heading {
    margin-bottom: 72px;
  }

  .products-grid {
    grid-template-columns: repeat(2, max(360px));
    justify-content: center;
    gap: 16px;
  }

  .products-actions {
    margin-top: 32px;
  }
}

@media (max-width: 767px) {
  .products {
    padding-bottom: 96px;
  }

  .products-heading {
    margin-bottom: 64px;
  }

  .products-grid {
    grid-template-columns: max(359px);
    gap: 16px;
  }

  .products-actions {
    margin-top: 40px;
  }
}
</style>
