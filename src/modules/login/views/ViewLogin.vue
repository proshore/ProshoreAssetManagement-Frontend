<script>
import validateEmail from "@/utils/validateEmail";
import validatePassword from "@/utils/validatePassword.js";
import BaseInput from "@/components/BaseInput.vue";
import BaseAlert from "@/components/BaseAlert.vue";
import { loginUser } from "../services";
import TogglePassword from "@/components/TogglePassword.vue";
import { useToast } from "vue-toastification"
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
    TogglePassword,
  },

  methods: {
    formData() {
      return {
          email: this.email.value,
          password: this.password.value,
        }
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
      document.getElementById("loginBtn").disabled = 'true';
      if (!this.email.value || !this.password.value) {
        return (this.submission.message = "Fields must not be empty");
      }
      if (this.email.error || this.password.error) {
        return (this.submission.message =
          "Some fields are not filled properly");
      }
      const toast = useToast();
      try {
        const response = await loginUser(this.formData());
        if ((response.data.success = true)) {
          this.submission.message = "Login Successful";
          //toast message
          toast.success("Logged into Proshore Asset Management");

          this.submission.isVerified = true;
          localStorage.setItem('data',response.data.data.token);
          this.$router.push({ name: "dashboard" });
        }
      } catch (error) {
        document.getElementById("loginBtn").disabled = false;
        this.submission.message = error.response.data.message;
        toast.error("Something went wrong")
        
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
                  <TogglePassword :seen="password.seen" @clicked="toggleSeen('password')" />
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
              

              <button class="btn w-100 button-color" id="loginBtn" data-cy="login-btn" href="/dashboard">
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
.forgot-password {
  color: #fdc2ad;
  text-decoration: none;
}
.forgot-password::after {
  display: block;
  content: "";
  border-bottom: solid 1px #fdc2ad;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.forgot-password:hover::after {
  transform: scaleX(0.35);
  transition: transform 250ms ease-in;
}
.forgot-password::after {
  transform-origin: 0% 50%;
}
</style>