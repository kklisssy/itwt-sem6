<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-media">
        <img src="../../assets/man.png" alt="Мужчина" />
      </div>

      <div class="hero-content">
        <div class="hero-title-group">
          <span class="hero-accent" aria-hidden="true"></span>
          <div class="hero-title-wrap">
            <h1>THE BRAND</h1>
            <p>OF LUXERIOUS <span class="pink">FASHION</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped lang="css">
.hero {
  background-color: #f1e4e6;
}

.hero-inner {
  margin: 0 auto;
  min-height: 764px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hero-media {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.hero-media img {
  width: 100%;
  max-width: 800px;
  height: auto;
}

.hero-content {
  display: flex;
  align-items: center;
  padding-inline: 64px;
}

.hero-title-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hero-accent {
  width: 12px;
  min-width: 12px;
  height: 92px;
  background-color: var(--color-accent);
}

.hero-title-wrap h1 {
  margin: 0;
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
}

.hero-title-wrap p {
  margin: 0;
  font-size: 32px;
  line-height: 1;
  font-weight: 700;
}

.pink {
  color: var(--color-accent);
}

@media (max-width: 1599px) {
  .hero-inner {
    min-height: 368px;
  }

  .hero-content {
    padding-inline: 40px 32px;
  }

  .hero-title-wrap h1 {
    font-size: 44px;
  }

  .hero-title-wrap p {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .hero-inner {
    min-height: 363px;
    display: flex;
    justify-content: center;
  }

  .hero-media {
    display: none;
  }

  .hero-content {
    width: 100%;
    justify-content: center;
    padding: 0 24px;
  }

  .hero-title-group {
    gap: 15px;
  }

  .hero-accent {
    width: 12px;
    height: 61px;
  }

  .hero-title-wrap h1 {
    font-size: 38px;
  }

  .hero-title-wrap p {
    font-size: 20px;
  }
}
</style>
