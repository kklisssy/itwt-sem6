<template>
  <div class="product-page">
    <section class="product-heading">
      <div class="container">
        <div class="product-heading-inner">
          <h1>NEW ARRIVALS</h1>

          <nav class="breadcrumbs" aria-label="Breadcrumbs">
            <a href="#">HOME</a>
            <span>/</span>
            <a href="#">MEN</a>
            <span>/</span>
            <span class="breadcrumbs-current">NEW ARRIVALS</span>
          </nav>
        </div>
      </div>
    </section>

    <section class="product-hero">
      <button
        class="product-arrow product-arrow-prev"
        type="button"
        aria-label="Previous product image"
        @click="goToProduct(previousProductId)"
      >
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4 3.1L4.65 10.85L12.4 18.6L10.85 21.7L0 10.85L10.85 0L12.4 3.1Z"
            fill="black"
          />
        </svg>
      </button>

      <img
        v-if="currentProduct"
        class="product-hero-image"
        :src="currentProduct.image"
        :alt="currentProduct.title"
      />

      <button
        class="product-arrow product-arrow-next"
        type="button"
        aria-label="Next product image"
        @click="goToProduct(nextProductId)"
      >
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18.6L7.75 10.85L0 3.1L1.55 0L12.4 10.85L1.55 21.7L0 18.6Z"
            fill="black"
          />
        </svg>
      </button>
    </section>

    <section class="product-details">
      <div class="container">
        <article class="product-info">
          <p class="product-collection">
            {{ currentProduct?.collection }}
          </p>
          <h2>{{ currentProduct?.title }}</h2>

          <p class="product-description">
            {{ currentProduct?.description }}
          </p>

          <p class="product-price">{{ currentProduct?.price }}</p>

          <div class="product-options">
            <button type="button">CHOOSE COLOR</button>
            <button type="button">CHOOSE SIZE</button>
            <button type="button">QUANTITY</button>
          </div>

          <button class="add-cart-button" type="button" @click="handleAddToCart">
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49847 21.9633C5.50635 21.5303 5.64091 21.1093 5.88519 20.7531C6.12947 20.3969 6.47261 20.1214 6.87158 19.9612C7.27055 19.8009 7.7076 19.7631 8.12781 19.8525C8.54802 19.9418 8.93269 20.1543 9.23358 20.4633C9.53447 20.7723 9.73817 21.164 9.81909 21.5893C9.90002 22.0146 9.85453 22.4546 9.68842 22.854C9.52231 23.2533 9.24296 23.5944 8.88538 23.8342C8.52779 24.0741 8.10791 24.202 7.67847 24.2021C7.38956 24.1994 7.10399 24.1395 6.83807 24.0255C6.57216 23.9116 6.3311 23.7459 6.12866 23.538C5.92623 23.3301 5.76639 23.084 5.65826 22.8138C5.55013 22.5436 5.49584 22.2547 5.49847 21.9633ZM21.3045 24.2021C20.8711 24.2086 20.4453 24.087 20.0797 23.8523C19.7141 23.6176 19.4247 23.28 19.2471 22.8813C19.0696 22.4826 19.0117 22.0402 19.0806 21.6086C19.1496 21.1771 19.3423 20.7754 19.6351 20.4531C19.9278 20.1308 20.3077 19.9019 20.728 19.7948C21.1482 19.6878 21.5903 19.7073 21.9997 19.8507C22.4091 19.9942 22.7679 20.2554 23.0317 20.6022C23.2956 20.9489 23.453 21.366 23.4845 21.8019C23.5269 22.3938 23.3369 22.9787 22.9555 23.4306C22.7706 23.6529 22.5436 23.8358 22.2877 23.9684C22.0319 24.1011 21.7524 24.1808 21.4655 24.203L21.3045 24.2021ZM8.59351 17.2638C8.38116 17.2634 8.17488 17.1923 8.00671 17.0616C7.83855 16.9308 7.71792 16.7477 7.66351 16.5407L3.73651 1.97359H0.978516C0.719001 1.97359 0.470064 1.8696 0.28656 1.68454C0.103056 1.49949 0 1.2485 0 0.986794C0 0.725084 0.103056 0.474103 0.28656 0.289046C0.470064 0.103989 0.719001 0 0.978516 0H4.45752C4.66982 0.000574453 4.876 0.0717836 5.04413 0.202505C5.21226 0.333225 5.33295 0.516203 5.38751 0.723107L9.31451 15.2903H20.0185L23.5765 6.90497H11.7185C11.459 6.90497 11.2101 6.80098 11.0266 6.61593C10.8431 6.43087 10.74 6.17989 10.74 5.91818C10.74 5.65647 10.8431 5.40549 11.0266 5.22043C11.2101 5.03537 11.459 4.93139 11.7185 4.93139H25.0535C25.2131 4.93184 25.3701 4.97283 25.5099 5.05055C25.6497 5.12827 25.7679 5.24027 25.8535 5.37616C25.9413 5.51401 25.9945 5.67135 26.0084 5.83459C26.0224 5.99783 25.9966 6.16201 25.9335 6.31297L21.5425 16.6718C21.469 16.8467 21.3462 16.996 21.1895 17.1012C21.0327 17.2064 20.8488 17.2629 20.6605 17.2638H8.59351Z"
                fill="#EF5B70"
              />
            </svg>
            {{ isAdding ? "Adding..." : "Add to Cart" }}
          </button>
        </article>
      </div>
    </section>

    <section class="related-products">
      <div class="container">
        <div class="related-grid">
          <ProductCard
            v-for="product in relatedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted, watch } from "vue";
import ProductCard from "../components/product/ProductCard.vue";
import { addCartItem } from "../api/cartApi";
import { getProduct } from "../api/productApi";
import { navigate, useRouter } from "../router";

const currentProduct = ref(null);
const relatedProducts = ref([]);
const previousProductId = ref(null);
const nextProductId = ref(null);
const isAdding = ref(false);
const { currentQuery } = useRouter();

onMounted(loadProduct);

watch(
  () => currentQuery.value.get("id"),
  loadProduct
);

async function loadProduct() {
  const productId = currentQuery.value.get("id");
  const data = await getProduct(productId ? { id: productId } : {});

  currentProduct.value = data.product;
  relatedProducts.value = data.relatedProducts;
  previousProductId.value = data.previousProductId;
  nextProductId.value = data.nextProductId;
}

function goToProduct(productId) {
  if (!productId) {
    return;
  }

  navigate(`/product?id=${productId}`);
}

async function handleAddToCart() {
  if (!currentProduct.value) {
    return;
  }

  isAdding.value = true;

  try {
    await addCartItem({
      productId: currentProduct.value.id,
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
.product-heading {
  background-color: #f8f3f4;
}

.product-heading-inner {
  min-height: 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.product-heading h1 {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-accent);
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: #636363;
}

.breadcrumbs-current {
  font-weight: 700;
  color: var(--color-accent);
}

.product-hero {
  position: relative;
  min-height: 777px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-bottom: 1px solid #eaeaea;
}

.product-hero-image {
  width: min(100%, 597px);
  max-height: 724px;
  object-fit: contain;
}

.product-arrow {
  position: absolute;
  top: 50%;
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(42, 42, 42, 0.15);
  color: #000000;
}

.product-arrow:hover {
  color: var(--color-accent);
}

.product-arrow-prev {
  left: 0;
}

.product-arrow-next {
  right: 0;
}

.product-details {
  margin-top: -65px;
  position: relative;
  z-index: 1;
}

.product-info {
  max-width: 1140px;
  min-height: 601px;
  margin: 0 auto;
  padding: 64px 24px;
  border: 1px solid #eaeaea;
  background-color: #ffffff;
  text-align: center;
}

.product-collection {
  position: relative;
  margin: 0 0 27px;
  padding-bottom: 15px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-accent);
}

.product-collection::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 63px;
  height: 3px;
  background-color: var(--color-accent);
  transform: translateX(-50%);
}

.product-info h2 {
  margin: 0 0 48px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 300;
  color: #4d4d4d;
}

.product-description {
  max-width: 555px;
  margin: 0 auto 32px;
  line-height: 1.2;
  font-weight: 300;
  color: #5e5e5e;
}

.product-price {
  max-width: 642px;
  margin: 0 auto 64px;
  padding-bottom: 64px;
  border-bottom: 1px solid #eaeaea;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-accent);
}

.product-options {
  display: flex;
  justify-content: center;
  gap: 23px;
  margin-bottom: 48px;
}

.product-options button {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  line-height: 1.2;
  color: #6f6e6e;
}

.product-options button::after {
  content: "";
  width: 7px;
  height: 7px;
  border: solid currentColor;
  border-width: 0 1px 1px 0;
  transform: translateY(-2px) rotate(45deg);
}

.add-cart-button {
  min-width: 212px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  padding: 12px 24px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 16px;
  line-height: 1.2;
}

.add-cart-button:hover {
  background-color: var(--color-accent);
  color: #ffffff;
}

.related-products {
  padding-block: 128px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1599px) {
  .product-hero {
    min-height: 624px;
  }

  .product-hero-image {
    max-height: 565px;
  }

  .product-details {
    margin-top: 0;
  }

  .product-info {
    border-inline: none;
  }

  .related-products {
    padding-block: 128px;
  }

  .related-grid {
    grid-template-columns: repeat(3, minmax(0, 360px));
    justify-content: center;
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .product-heading-inner {
    min-height: 148px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .product-hero {
    min-height: 624px;
    padding-inline: 48px;
  }

  .product-info {
    min-height: auto;
    padding: 64px 24px;
  }

  .product-info h2 {
    margin-bottom: 32px;
  }

  .product-description {
    line-height: 1.43;
  }

  .product-price {
    margin-bottom: 48px;
    padding-bottom: 32px;
  }

  .product-options {
    gap: 24px;
    margin-bottom: 64px;
  }

  .product-options button {
    gap: 6px;
    font-size: 10px;
  }

  .related-products {
    padding-block: 64px;
  }

  .related-grid {
    grid-template-columns: minmax(0, 359px);
    justify-content: center;
    gap: 16px;
  }
}
</style>
