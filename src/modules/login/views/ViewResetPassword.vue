<script>
import BaseInput from "@/components/BaseInput.vue";
import validatePassword from "@/utils/validatePassword.js";
import { resetPassword } from "@/modules/register/services/reset_index.js";
import BaseAlert from "@/components/BaseAlert.vue";
import TogglePassword from "@/components/togglePassword.vue";
import { useToast } from "vue-toastification"
export default {
  data() {
    return {
      password: {
        value: "",
        error: "",
        seen: false,
      },

      cpassword: {
        value: "",
        error: "",
        seen: false,
      },
      submission: {
        message: "",
        isVerified: false,
      },
      token:"",
      email:""
    };
  },
  components: {
    BaseInput,
    BaseAlert,
    TogglePassword,
  },
  mounted(){
      this.token = this.$route.query.token
      this.email= this.$route.query.email
    },

  methods: {
    validateField(field) {
      if (field === "password") {
        let response = validatePassword(this.password.value);
        this.password.error = response.errorMessage;
      }
      if (field === "cpassword") {
        if (this.password.value != this.cpassword.value) {
          this.cpassword.error = "Passwords should match";
        } else {
          this.cpassword.error = "";
        }
      }
    },
    toggleSeen(field) {
      if (field === "cpassword") {
        this.cpassword.seen = !this.cpassword.seen;
      }
      if (field === "password") {
        this.password.seen = !this.password.seen;
      }
      console.log(this.password.seen);
    },
    async handleSubmit() {
      const toast = useToast();
      this.validateField("cpassword");
      if (!this.password.value && !this.cpassword.value) {
        this.submission.message = "Password must be provided";
        return;
      }
      if (this.password.value != this.cpassword.value) {
        this.validateField("cpassword");
        this.submission.message = "Passwords do not match";
        return;
      }
      if (!this.password.error && !this.cpassword.error) {
        try {
          const response = await resetPassword(this.formData());
          this.submission = {
            message: "Password Changed Successfully",
            isVerified: true,
          };
          toast.success("Pasword Changed Successfully")
          setTimeout(() => this.$router.push({ name: "login" }), 2000);
        } catch (error) {
          this.submission.message = error.response.data.message;
          toast.error(`${error.response.data.message}`)
        }
        return;
      } else {
        this.submission.message = "The form is not filled properly";
      }
    },
    formData() {
      return {
          token:this.token,
          email:this.email,
          password: this.password.value,
          password_confirmation: this.cpassword.value,
      };
    },
  },
};
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row w-100 main-container p-3">
      <section class="d-none d-lg-block col-lg-5 register-img"></section>
      <section
        class="col-12 col-lg-6 mx-xl-5 d-flex justify-content-center align-items-center"
      >
        <div class="register-form-container">
          <div class="register-head">
            <h3 class="register-head-title">Reset your Password</h3>
            <sub class="register-head-subtitle"
              >Set your new password for the asset management account</sub
            >
          </div>

          <div class="container-fluid mt-5">
            <BaseAlert :submission="submission" />
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="password" class="form-label">Password:</label>
                <div class="password-field d-flex">
                  <input
                    class="form-control"
                    name="password"
                    :type="[password.seen ? 'text' : 'password']"
                    id="password"
                    label="Password"
                    placeholder="Set Your Password"
                    v-model="password.value"
                    @keyup="validateField('password')"
                    data-cy="reset-password"
                  />
                  <TogglePassword
                    :seen="password.seen"
                    @clicked="toggleSeen('password')"
                  />
                </div>
                <div
                  v-if="password.error"
                  class="form-text text-danger"
                  v-text="password.error"
                ></div>
              </div>

              <div class="mb-4">
                <label for="cpassword" class="form-label"
                  >Confirm Password:</label
                >
                <div class="password-field d-flex">
                  <input
                    class="form-control"
                    name="cpassword"
                    :type="[cpassword.seen ? 'text' : 'password']"
                    id="cpassword"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    v-model="cpassword.value"
                    @keyup="validateField('cpassword')"
                    data-cy="reset-cpassword"
                  />
                  <TogglePassword
                    :seen="cpassword.seen"
                    @clicked="toggleSeen('cpassword')"
                  />
                </div>
                <div
                  v-if="cpassword.error"
                  class="form-text text-danger"
                  v-text="cpassword.error"
                ></div>
              </div>

              <button
                class="btn w-100 w-md-50 button-color"
                data-cy="reset-btn"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
