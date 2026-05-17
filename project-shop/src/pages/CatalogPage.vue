<template>
  <div class="catalog-page">
    <section class="catalog-heading">
      <div class="container">
        <div class="catalog-heading-inner">
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

    <section class="catalog">
      <div class="container">
        <div class="catalog-toolbar">
          <div class="filter">
            <button class="filter-button" type="button">
              FILTER
              <span class="filter-icon" aria-hidden="true"></span>
            </button>
          </div>

          <div class="catalog-sorts">
            <button class="catalog-sort" type="button">TRENDING NOW</button>
            <button class="catalog-sort" type="button">SIZE</button>
            <button class="catalog-sort" type="button">PRICE</button>
          </div>
        </div>

        <div class="catalog-grid">
          <ProductCard
            v-for="product in productsCatalog"
            :key="product.id"
            :product="product"
          />
        </div>

        <nav class="pagination" aria-label="Catalog pagination">
          <button type="button" aria-label="Previous page">&lt;</button>
          <a class="pagination-current" href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <button type="button" aria-label="Next page">&gt;</button>
        </nav>
      </div>
    </section>

    <FeatureSection />
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from "vue";
import ProductCard from "../components/product/ProductCard.vue";
import FeatureSection from "../components/sections/FeatureSection.vue";
import { getCatalog } from "../api/catalogApi";

const productsCatalog = ref([]);

onMounted(async () => {
  const data = await getCatalog();

  productsCatalog.value = data.productsCatalog
    .filter((product) => product.category === "men")
    .slice(0, 9);
});
</script>

<style scoped lang="css">
.catalog-heading {
  background-color: #f8f3f4;
}

.catalog-heading-inner {
  min-height: 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.catalog-heading h1 {
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

.catalog {
  padding-block: 52px 96px;
}

.catalog-toolbar {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  margin-bottom: 48px;
}

.filter {
  position: relative;
  width: 360px;
}

.filter-button,
.catalog-sort {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 17px;
  font-size: 14px;
  line-height: 1.2;
  color: #000000;
}

.filter-icon,
.catalog-sort::after {
  content: "";
  width: 10px;
  height: 6px;
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
}

.catalog-sort::after {
  width: 6px;
  height: 6px;
  border: solid currentColor;
  border-width: 0 1px 1px 0;
  transform: translateY(-2px) rotate(45deg);
}

.catalog-sorts {
  grid-column: 2;
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.pagination {
  width: fit-content;
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 17px;
  margin: 48px auto 0;
  padding: 12px 15px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  color: #c4c4c4;
}

.pagination button,
.pagination a {
  color: inherit;
}

.pagination-current {
  color: var(--color-accent);
}

@media (max-width: 1599px) {
  .catalog {
    padding-block: 24px 64px;
  }

  .catalog-toolbar {
    grid-template-columns: 1fr auto;
    margin-bottom: 40px;
  }

  .catalog-sorts {
    grid-column: 2;
  }

  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 360px));
    justify-content: center;
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .catalog-heading-inner {
    min-height: 148px;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  .catalog {
    padding-block: 24px 64px;
  }

  .catalog-toolbar {
    grid-template-columns: auto 1fr;
    gap: 16px;
    margin-bottom: 32px;
  }

  .filter {
    width: auto;
  }

  .filter-button {
    font-size: 0;
  }

  .filter-icon {
    width: 37px;
    height: 25px;
    border-width: 2px;
    color: var(--color-accent);
  }

  .catalog-sorts {
    gap: 20px;
    justify-self: end;
  }

  .catalog-sort {
    gap: 8px;
    font-size: 12px;
  }

  .catalog-grid {
    grid-template-columns: minmax(0, 359px);
    justify-content: center;
    gap: 16px;
  }

  .pagination {
    gap: 14px;
    margin-top: 40px;
  }
}
</style>
