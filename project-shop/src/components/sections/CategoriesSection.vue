<template>
  <section class="categories">
    <div class="container">
      <div class="categories-grid">
        <article class="categories-card" @click="navigate('/catalog?category=women')">
          <img
            class="categories-image"
            src="../../assets/woman-cs.png"
            alt="Женская коллекция"
          />
          <div class="categories-overlay">
            <p>30% OFF</p>
            <h2>FOR WOMEN</h2>
          </div>
        </article>

        <article class="categories-card categories-card-men" @click="navigate('/catalog?category=men')">
          <img
            class="categories-image"
            src="../../assets/man-cs.png"
            alt="Мужская коллекция"
          />
          <div class="categories-overlay">
            <p>HOT DEAL</p>
            <h2>FOR MEN</h2>
          </div>
        </article>

        <article class="categories-card categories-card-kids" @click="navigate('/catalog?category=kids')">
          <img
            class="categories-image"
            src="../../assets/kid.png"
            alt="Детская коллекция"
          />
          <div class="categories-overlay">
            <p>NEW ARRIVALS</p>
            <h2>FOR KIDS</h2>
          </div>
        </article>

        <article class="categories-card categories-card-accessories" @click="navigate('/catalog?category=accessories')">
          <img
            class="categories-image"
            src="../../assets/accesories.png"
            alt="Аксессуары"
          />
          <div class="categories-overlay">
            <p>LUXIROUS & TRENDY</p>
            <h2>ACCESORIES</h2>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { navigate } from "../../router";
</script>

<style scoped lang="css">
.categories {
  padding-block: 65px 96px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.categories-card {
  position: relative;
  min-height: 260px;
  overflow: hidden;
  cursor: pointer;
}

.categories-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.categories-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(33, 22, 22, 0.7);
  z-index: 1;
}

.categories-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.categories-overlay p {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
}

.categories-overlay h2 {
  margin: 0;
  color: var(--color-accent);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
}

.categories-card-accessories {
  grid-column: 1 / -1;
  min-height: 180px;
}

@media (max-width: 1599px) {
  .categories {
    padding-block: 25px 130px;
  }

  .categories-card {
    min-height: 168px;
  }

  .categories-grid {
    gap: 20px;
  }

  .categories-card-accessories {
    min-height: 116px;
  }
}

@media (max-width: 767px) {
  .categories {
    padding-block: 64px 64px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .categories-card {
    min-height: 247px;
  }

  .categories-card-accessories {
    grid-column: auto;
    min-height: 111px;
  }
}
</style>
