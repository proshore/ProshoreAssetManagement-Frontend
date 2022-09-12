<script>
import validateEmail from "@/utils/validateEmail";
import validatePassword from "@/utils/validatePassword.js";
import BaseInput from "@/components/BaseInput.vue";
import BaseAlert from "@/components/BaseAlert.vue";
import { loginUser } from "../services";
import axios from "axios";
export default {
  data() {
    return {
      email: {
        value: "",
        error: "",
      },
      password: "",
      password: {
        value: "",
        error: "",
        seen: false,
      },
      submission: {
        message: "",
        isVerified: false,
      },
    };
  },
  components: {
    BaseInput,
    BaseAlert,
  },
  // async created() {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/login_users`);
  //     this.email = response.data.email;
  //     console.log(this.email);
  //     this.password = response.data.password;
  //     console.log(this.password);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },

  methods: {
    formData() {
      ({
        email: this.email.value,
        password: this.password.value,
      });
    },
    validateField(field) {
      if (field === "email") {
        let response = validateEmail(this.email.value);
        this.email.error = response.errorMessage;
      }
      if (field === "password") {
        let response = validatePassword(this.password.value);
        this.password.error = response.errorMessage;
      }
    },
    async handleSubmit() {
      if (!this.email.value || !this.password.value) {
        return (this.submission.message = "Fields must not be empty");
      }
      if (this.email.error || this.password.error) {
        return (this.submission.message =
          "Some fields are not filled properly");
      }

      try {
        await loginUser(this.formData());
      } catch (error) {
        this.submission.message = error;
      }
    },
    toggleSeen() {
      this.password.seen = !this.password.seen;
    },
  },
};
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row w-100 border main-container p-3">
      <section class="col-5 login-img"></section>
      <section
        class="col-6 mx-3 d-flex justify-content-center align-items-center"
      >
        <div class="w-50">
          <div class="login-head">
            <h3 class="login-head-title">Sign In</h3>
            <sub class="login-head-subtitle"
              >Sign In to your Asset Management
            </sub>
          </div>

          <div class="container-fluid mt-5">
            <BaseAlert :submission="submission" />
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Example input placeholder"
                  v-model="email.value"
                  @keyup="validateField('email')"
                  data-cy="login-email"
                />
                <div
                  v-if="email.error"
                  class="form-text text-danger"
                  v-text="email.error"
                ></div>
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password:</label>
                <div class="password-field d-flex">
                  <input
                    class="form-control"
                    name="password"
                    :type="[password.seen ? 'text' : 'password']"
                    id="password"
                    label="Password"
                    placeholder="Enter Your Password"
                    v-model="password.value"
                    @keyup="validateField('password')"
                    data-cy="login-password"
                  />
                  <div
                    class="icon"
                    id="password"
                    @click="toggleSeen"
                    data-cy="toggle-seen"
                  ></div>
                </div>
                <div
                  v-if="password.error"
                  class="form-text text-danger"
                  v-text="password.error"
                ></div>
              </div>
              <div>
                <div class="row my-3">
                  <RouterLink
                class="forgot-password"
                :to="{name:'forgotpassword'}"
                data-cy="login-forgot-password"
                >Forgot Password</RouterLink
              >
                </div>
               
              </div>
              

              <button class="btn w-100 button-color" data-cy="login-btn" href="/dashboard" @click="handleSubmit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.forgot-password{
  color:#fdc2ad;
  text-decoration: none;
  
}
.forgot-password::after {
  display:block;
  content: '';
  border-bottom: solid 1px #fdc2ad;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.forgot-password:hover::after{
  transform: scaleX(0.35);
}
.forgot-password::after{  transform-origin:  0% 50%; }
</style>