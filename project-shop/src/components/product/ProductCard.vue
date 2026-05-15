<template>
  <article class="product-card">
    <img class="product-card-image" :src="product.image" :alt="product.title" />

    <div class="product-card-content">
      <h3 class="product-card-title">{{ product.title }}</h3>

      <p class="product-card-text">
        {{ product.description }}
      </p>

      <p class="product-card-price">{{ product.price }}</p>
    </div>
  </article>
</template>

<script setup lang="js">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="css">
.product-card {
  background-color: #f8f8f8;
}

.product-card-image {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: contain;
}

.product-card-content {
  padding: 24px 16px 20px;
}

.product-card-title {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  color: #000000;
}

.product-card-text {
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.2;
  color: #5d5d5d;
}

.product-card-price {
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  color: var(--color-accent);
}

@media (max-width: 767px) {
  .product-card-image {
    height: 418px;
  }

  .product-card-content {
    padding: 24px 18px 20px;
  }
}
</style>
