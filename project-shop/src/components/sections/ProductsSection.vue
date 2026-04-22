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
        <article
          v-for="product in products"
          :key="product.id"
          class="product-card"
        >
          <img
            class="product-card-image"
            :src="product.image"
            :alt="product.title"
          />

          <div class="product-card-content">
            <h3>{{ product.title }}</h3>
            <p class="product-card-text">
              {{ product.description }}
            </p>
            <p class="product-card-price">{{ product.price }}</p>
          </div>
        </article>
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
const products = [
  {
    id: 1,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/1.png", import.meta.url).href,
  },
  {
    id: 2,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/2.png", import.meta.url).href,
  },
  {
    id: 3,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/3.png", import.meta.url).href,
  },
  {
    id: 4,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/4.png", import.meta.url).href,
  },
  {
    id: 5,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/5.png", import.meta.url).href,
  },
  {
    id: 6,
    title: "ELLERY X M'O CAPSULE",
    description:
      "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    image: new URL("../../assets/products/6.png", import.meta.url).href,
  },
];
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

.product-card-content h3 {
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

  .product-card-image {
    height: 420px;
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

  .product-card-image {
    height: 418px;
  }

  .product-card-content {
    padding: 24px 18px 20px;
  }

  .products-actions {
    margin-top: 40px;
  }
}
</style>
