<template>
  <div class="cart-page">
    <section class="cart-heading">
      <div class="container">
        <h1>SHOPPING CART</h1>
      </div>
    </section>

    <section class="cart">
      <div class="container">
        <div class="cart-layout">
          <div class="cart-main">
            <div class="cart-list">
              <article
                v-for="item in cartStore.items"
                :key="item.id"
                class="cart-item"
              >
                <img
                  class="cart-item-image"
                  :src="item.image"
                  :alt="item.title"
                />

                <div class="cart-item-content">
                  <button
                    class="cart-item-remove"
                    type="button"
                    aria-label="Remove item"
                    @click="cartStore.updateCart('delete', item)"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757"
                      />
                    </svg>
                  </button>

                  <h2>{{ item.title }}</h2>

                  <dl class="cart-item-details">
                    <div>
                      <dt>Price:</dt>
                      <dd class="cart-price">{{ item.price }}</dd>
                    </div>
                    <div>
                      <dt>Color:</dt>
                      <dd>{{ item.color }}</dd>
                    </div>
                    <div>
                      <dt>Size:</dt>
                      <dd>{{ item.size }}</dd>
                    </div>
                    <div>
                      <dt>Quantity:</dt>
                      <dd>
                        <input
                          class="cart-quantity"
                          type="number"
                          :value="item.quantity"
                          min="1"
                          aria-label="Quantity"
                        />
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </div>

            <div class="cart-actions">
              <button type="button">CLEAR SHOPPING CART</button>
              <button type="button">CONTINUE SHOPPING</button>
            </div>
          </div>

          <aside class="cart-sidebar">
            <form class="shipping-form">
              <h2>SHIPPING ADRESS</h2>

              <input
                type="text"
                placeholder="Bangladesh"
                aria-label="Country"
              />
              <input type="text" placeholder="State" aria-label="State" />
              <input
                type="text"
                placeholder="Postcode / Zip"
                aria-label="Postcode or Zip"
              />

              <button type="button">GET A QUOTE</button>
            </form>

            <div class="cart-total">
              <div class="subtotal">
                <span>SUB TOTAL</span>
                <span>{{ cartStore.summary.subTotal }}</span>
              </div>

              <div class="grand-total">
                <span>GRAND TOTAL</span>
                <span>{{ cartStore.summary.grandTotal }}</span>
              </div>

              <button type="button">PROCEED TO CHECKOUT</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="js">
import { onMounted } from "vue";
import { useCartStore } from "../stores/useCartStore";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.getCart();
});
</script>

<style scoped lang="css">
.cart-heading {
  background-color: #f8f3f4;
}

.cart-heading h1 {
  min-height: 148px;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-accent);
}

.cart {
  padding-block: 96px 128px;
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 734px) minmax(280px, 360px);
  justify-content: space-between;
  align-items: start;
  gap: 46px;
}

.cart-list {
  display: grid;
  gap: 40px;
}

.cart-item {
  min-height: 306px;
  display: grid;
  grid-template-columns: 262px 390px;
  background-color: #ffffff;
  box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
}

.cart-item-image {
  width: 100%;
  height: 306px;
  object-fit: cover;
  background-color: #f3eeee;
}

.cart-item-content {
  position: relative;
  padding: 28px 64px 24px 31px;
}

.cart-item h2 {
  max-width: 200px;
  margin: 0 0 42px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #222222;
}

.cart-item-remove {
  position: absolute;
  top: 20px;
  right: -50px;
  color: #575757;
}

.cart-item-remove svg {
  width: 18px;
}

.cart-item-details {
  display: grid;
  gap: 6px;
  margin: 0;
  font-size: 22px;
  line-height: 1.2;
  color: #575757;
}

.cart-item-details div {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cart-item-details dt,
.cart-item-details dd {
  margin: 0;
}

.cart-price {
  color: var(--color-accent);
}

.cart-quantity {
  width: 44px;
  height: 25px;
  border: 1px solid #eaeaea;
  color: #656565;
  text-align: center;
  font-size: 18px;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 72px;
}

.cart-actions button,
.shipping-form button {
  min-width: 235px;
  min-height: 50px;
  padding: 14px 24px;
  border: 1px solid #a4a4a4;
  color: #000000;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
}

.cart-sidebar {
  display: grid;
  gap: 57px;
}

.shipping-form {
  display: grid;
  gap: 20px;
}

.shipping-form h2 {
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  color: #222222;
}

.shipping-form input {
  width: 100%;
  min-height: 45px;
  padding: 12px 17px;
  border: 1px solid #a4a4a4;
  color: #222222;
  font-size: 13px;
  line-height: 1.2;
}

.shipping-form input::placeholder {
  color: #b1b1b1;
}

.shipping-form button {
  justify-self: start;
  min-width: 100px;
  min-height: 35px;
  padding: 10px 14px;
  font-size: 11px;
}

.cart-total {
  padding: 39px 34px 42px;
  background-color: #f5f3f3;
  text-align: right;
}

.subtotal {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-bottom: 12px;
  font-size: 11px;
  line-height: 1.2;
  color: #4a4a4a;
}

.grand-total {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-bottom: 21px;
  padding-bottom: 21px;
  border-bottom: 1px solid #e2e2e2;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  color: #222222;
}

.grand-total span:last-child {
  font-weight: 700;
  color: var(--color-accent);
}

.cart-total button {
  width: 100%;
  min-height: 50px;
  padding: 14px 24px;
  background-color: var(--color-accent);
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
}

@media (max-width: 1599px) {
  .cart {
    padding-block: 59px 128px;
  }

  .cart-layout {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  .cart-main {
    max-width: 734px;
    margin: 0 auto;
  }

  .cart-actions {
    justify-content: center;
    margin-top: 62px;
    gap: 48px;
  }

  .cart-sidebar {
    max-width: 734px;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 16px;
    margin: 0 auto;
  }

  .cart-item-remove {
    top: 20px;
    right: 25px;
  }

  .cart-total {
    margin-top: 39px;
  }
}

@media (max-width: 767px) {
  .cart-heading h1 {
    justify-content: center;
  }

  .cart {
    padding-block: 39px 96px;
  }

  .cart-layout {
    gap: 48px;
  }

  .cart-list {
    gap: 32px;
  }

  .cart-item {
    min-height: 188px;
    grid-template-columns: 144px 215px;
  }

  .cart-item-image {
    height: 188px;
  }

  .cart-item-content {
    padding: 14px 36px 14px 17px;
  }

  .cart-item h2 {
    max-width: 140px;
    margin-bottom: 26px;
    font-size: 16px;
  }

  .cart-item-remove {
    top: 14px;
    right: 12px;
  }

  .cart-item-remove svg {
    width: 10px;
  }

  .cart-item-details {
    gap: 4px;
    font-size: 14px;
  }

  .cart-quantity {
    width: 30px;
    height: 15px;
    font-size: 10px;
  }

  .cart-actions {
    gap: 9px;
    margin-top: 30px;
  }

  .cart-actions button {
    min-width: 0;
    width: 100%;
    min-height: 33px;
    padding: 8px 12px;
    font-size: 12px;
    text-transform: none;
  }

  .cart-sidebar {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .cart-total {
    margin-top: 0;
  }
}
</style>
