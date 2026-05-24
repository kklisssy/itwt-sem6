<template>
  <div class="login-page">
    <section class="login-heading">
      <div class="container">
        <h1>LOGIN</h1>
      </div>
    </section>

    <section class="login">
      <div class="container">
        <form class="login-form" @submit.prevent="handleLogin">
          <fieldset>
            <legend>Login details</legend>

            <UiInput
              v-model="form.email"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
            <UiInput
              v-model="form.password"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </fieldset>

          <p v-if="formMessage" class="form-message" :class="messageClass">
            {{ formMessage }}
          </p>

          <div class="login-actions">
            <UiButton type="submit" :disabled="isSubmitting">
              {{ isSubmitting ? "SIGNING IN..." : "SIGN IN" }}
            </UiButton>
            <UiButton type="button" variant="outline" @click="navigate('/registration')">
              CREATE ACCOUNT
            </UiButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="js">
import { computed, ref } from "vue";
import { loginUser } from "../api/authApi";
import UiButton from "../components/ui/Button.vue";
import UiInput from "../components/ui/Input.vue";
import { navigate } from "../router";

const form = ref({
  email: "",
  password: "",
});
const formMessage = ref("");
const isSubmitting = ref(false);
const isSuccess = ref(false);

const messageClass = computed(() => ({
  "form-message-success": isSuccess.value,
  "form-message-error": !isSuccess.value,
}));

async function handleLogin() {
  formMessage.value = "";
  isSuccess.value = false;
  isSubmitting.value = true;

  try {
    const data = await loginUser(form.value);

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("authUser", JSON.stringify(data.user));

    isSuccess.value = true;
    formMessage.value = "Login completed";
    navigate("/");
  } catch (error) {
    formMessage.value = error.response?.data?.message || "Login failed";
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped lang="css">
.login-heading {
  background-color: #f8f3f4;
}

.login-heading h1 {
  min-height: 148px;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-accent);
}

.login {
  padding-block: 64px 96px;
}

.login-form {
  width: min(100%, 360px);
  display: grid;
  gap: 24px;
}

.login-form fieldset {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  border: 0;
}

.login-form legend {
  margin-bottom: 20px;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  color: #222222;
}

.login-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.form-message {
  margin: 0;
  font-size: 13px;
  line-height: 1.2;
}

.form-message-success {
  color: #248a3d;
}

.form-message-error {
  color: var(--color-accent);
}

@media (max-width: 767px) {
  .login-heading h1 {
    justify-content: center;
  }

  .login {
    padding-block: 40px 96px;
  }

  .login-actions {
    display: grid;
  }
}
</style>
