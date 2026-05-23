<template>
  <section class="subscribe">
    <div class="subscribe-overlay">
      <div class="container">
        <div class="subscribe-content">
          <div class="subscribe-review">
            <img
              class="subscribe-avatar"
              src="../assets/person.png"
              alt="Customer photo"
            />
            <p>
              "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              <span class="italic">pulvinar purus condimentum"</span>
            </p>
          </div>

          <div class="subscribe-form-block">
            <h2 class="subscribe-title">SUBSCRIBE</h2>
            <p class="subscribe-text">FOR OUR NEWSLETTER AND PROMOTION</p>

            <form class="subscribe-form">
              <UiInput
                class="subscribe-input"
                type="email"
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
                pill
              />
              <UiButton class="subscribe-button" type="submit"
                >Subscribe</UiButton
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import UiButton from "./ui/Button.vue";
import UiInput from "./ui/Input.vue";
</script>

<style scoped lang="css">
.subscribe {
  background-image: url("../assets/fon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.subscribe-overlay {
  background-color: rgba(244, 244, 244, 0.7);
}

.subscribe-content {
  min-height: 448px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.subscribe-review {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.subscribe-avatar {
  margin-bottom: 30px;
}

.subscribe-review p {
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  color: #222224;
}

.italic {
  font-style: italic;
}

.subscribe-form-block {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
}

.subscribe-form-block h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.subscribe-form-block p {
  margin: 0 0 32px;
  font-size: 18px;
}

.subscribe-form {
  display: flex;
  width: 100%;
  max-width: 356px;
}

.subscribe-input {
  border-radius: 24px 0 0 24px;
  font-size: 14px;
}

.subscribe-button {
  min-width: 100px;
  min-height: 49px;
  padding: 7px 16px;
  border-radius: 0 24px 24px 0;
  font-size: 14px;
}

@media (max-width: 1599px) {
  .subscribe-content {
    min-height: 693px;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    padding-block: 64px 140px;
  }
}

@media (max-width: 767px) {
  .subscribe-content {
    min-height: 550px;
    gap: 59px;
    padding-block: 64px 110px;
  }

  .subscribe-review {
    max-width: 320px;
  }

  .subscribe-review-text {
    font-size: 18px;
  }

  .subscribe-form-block {
    width: 100%;
  }

  .subscribe-text {
    margin-bottom: 22px;
    font-size: 14px;
  }

  .subscribe-form {
    max-width: 341px;
  }

  .subscribe-button {
    min-width: 96px;
  }
}
</style>
