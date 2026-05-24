<template>
  <article class="product-card">
    <a class="product-card-link" href="/product" @click.prevent="navigate('/product')">
      <img class="product-card-image" :src="product.image" :alt="product.title" />
    </a>

    <div class="product-card-content">
      <h3 class="product-card-title">
        <a href="/product" @click.prevent="navigate('/product')">{{ product.title }}</a>
      </h3>

      <p class="product-card-text">
        {{ product.description }}
      </p>

      <p class="product-card-price">{{ product.price }}</p>

      <button class="product-card-button" type="button" @click="handleAddToCart">
        {{ isAdding ? "Adding..." : "Add to Cart" }}
      </button>
    </div>
  </article>
</template>

<script setup lang="js">
import { ref } from "vue";
import { addCartItem } from "../../api/cartApi";
import { navigate } from "../../router";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const isAdding = ref(false);

async function handleAddToCart() {
  isAdding.value = true;

  try {
    await addCartItem({
      productId: props.product.id,
      quantity: 1,
      size: "M",
      color: "Default",
    });
  } finally {
    isAdding.value = false;
  }
}
</script>

<style scoped lang="css">
.product-card {
  background-color: #f8f8f8;
}

.product-card-link {
  display: block;
}

.product-card-image {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: contain;
  transition: opacity 0.2s ease;
}

.product-card-link:hover .product-card-image {
  opacity: 0.8;
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
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.2;
  color: var(--color-accent);
}

.product-card-button {
  min-height: 38px;
  padding: 9px 16px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 13px;
  line-height: 1.2;
}

.product-card-button:hover {
  background-color: var(--color-accent);
  color: #ffffff;
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
