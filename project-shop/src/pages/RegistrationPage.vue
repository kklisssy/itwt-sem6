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
              <svg
                aria-hidden="true"
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.54 0.208095C11.6058 0.142131 11.684 0.0897967 11.77 0.0540883C11.8561 0.01838 11.9483 0 12.0415 0C12.1347 0 12.2269 0.01838 12.313 0.0540883C12.399 0.0897967 12.4772 0.142131 12.543 0.208095L16.7929 4.458C16.8589 4.5238 16.9112 4.60196 16.9469 4.68802C16.9826 4.77407 17.001 4.86632 17.001 4.95949C17.001 5.05266 16.9826 5.14491 16.9469 5.23097C16.9112 5.31702 16.8589 5.39518 16.7929 5.46098L12.543 9.71089C12.41 9.84389 12.2296 9.91861 12.0415 9.91861C11.8534 9.91861 11.673 9.84389 11.54 9.71089C11.407 9.57788 11.3323 9.39749 11.3323 9.2094C11.3323 9.0213 11.407 8.84091 11.54 8.70791L15.2898 4.95949L11.54 1.21107C11.474 1.14528 11.4217 1.06711 11.386 0.981059C11.3503 0.895005 11.3319 0.802752 11.3319 0.709584C11.3319 0.616415 11.3503 0.524162 11.386 0.438109C11.4217 0.352055 11.474 0.273891 11.54 0.208095Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 4.95948C0 4.77162 0.0746263 4.59146 0.207462 4.45862C0.340297 4.32579 0.52046 4.25116 0.708318 4.25116H15.583C15.7708 4.25116 15.951 4.32579 16.0838 4.45862C16.2167 4.59146 16.2913 4.77162 16.2913 4.95948C16.2913 5.14734 16.2167 5.3275 16.0838 5.46033C15.951 5.59317 15.7708 5.6678 15.583 5.6678H0.708318C0.52046 5.6678 0.340297 5.59317 0.207462 5.46033C0.0746263 5.3275 0 5.14734 0 4.95948Z"
                  fill="white"
                />
              </svg>
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
  display: flex;
  gap: 12px;
  align-items: center;
}

.loyalty li svg {
  width: 18px;
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

  .loyalty li svg {
    width: 14px;
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
