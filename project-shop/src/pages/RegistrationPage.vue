<template>
  <div class="registration-page">
    <section class="registration-heading">
      <div class="container">
        <h1>REGISTRATION</h1>
      </div>
    </section>

    <section class="registration">
      <div class="container">
        <div class="registration-layout">
          <form class="registration-form">
            <fieldset>
              <legend>Your Name</legend>

              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
              />
              <input
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </fieldset>

            <div class="gender-options" aria-label="Gender">
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>

              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>

            <fieldset>
              <legend>Login details</legend>

              <input type="email" placeholder="Email" aria-label="Email" />
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
              />

              <p class="password-note">
                Please use 8 or more characters, with at least 1 number and a
                mixture of uppercase and lowercase letters
              </p>
            </fieldset>

            <button class="join-button" type="submit">
              JOIN NOW
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <section class="loyalty">
            <h2>LOYALTY HAS ITS PERKS</h2>
            <p>
              Get in on the loyalty program where you can earn points and unlock
              serious perks. Starting with these as soon as you join:
            </p>

            <ul>
              <li>15% off welcome offer</li>
              <li>Free shipping, returns and exchanges on all orders</li>
              <li>$10 off a purchase on your birthday</li>
              <li>Early access to products</li>
              <li>Exclusive offers & rewards</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="css">
.registration-heading {
  background-color: #f8f3f4;
}

.registration-heading h1 {
  min-height: 148px;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-accent);
}

.registration {
  padding-block: 64px 96px;
}

.registration-layout {
  display: grid;
  grid-template-columns: 360px minmax(0, 652px);
  justify-content: space-between;
  align-items: start;
  gap: 64px;
}

.registration-form {
  display: grid;
  gap: 31px;
}

.registration-form fieldset {
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0;
  border: 0;
}

.registration-form legend {
  margin-bottom: 20px;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  color: #222222;
}

.registration-form input[type="text"],
.registration-form input[type="email"],
.registration-form input[type="password"] {
  width: 100%;
  min-height: 45px;
  padding: 12px 17px;
  border: 1px solid #a4a4a4;
  font-size: 13px;
  line-height: 1.2;
  color: #222222;
}

.registration-form input::placeholder {
  color: #b1b1b1;
}

.gender-options {
  display: flex;
  align-items: center;
  gap: 20px;
}

.gender-options label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: #000000;
}

.gender-options input {
  width: 17px;
  height: 17px;
  margin: 0;
}

.password-note {
  margin: -5px 0 0;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  color: #b1b1b1;
}

.join-button {
  width: 167px;
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 14px 20px;
  background-color: var(--color-accent);
  color: #ffffff;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
}

.join-button span {
  font-size: 22px;
  line-height: 1;
}

.loyalty {
  color: #000000;
  font-weight: 300;
}

.loyalty h2 {
  margin: 0 0 22px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 300;
}

.loyalty p {
  margin: 0 0 21px;
  font-size: 24px;
  line-height: 1.2;
}

.loyalty ul {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 24px;
  line-height: 1.2;
}

.loyalty li {
  position: relative;
  padding-left: 43px;
}

.loyalty li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
}

@media (max-width: 1599px) {
  .registration {
    padding-block: 40px 96px;
  }

  .registration-layout {
    gap: 22px;
  }

  .loyalty h2,
  .loyalty p,
  .loyalty ul {
    font-size: 16px;
  }

  .loyalty li {
    padding-left: 42px;
  }
}

@media (max-width: 767px) {
  .registration-heading h1 {
    justify-content: center;
  }

  .registration {
    padding-block: 40px 96px;
  }

  .registration-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .registration-form {
    width: 100%;
  }
}
</style>
