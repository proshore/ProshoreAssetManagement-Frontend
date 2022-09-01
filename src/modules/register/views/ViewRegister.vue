<script>
import BaseInput from "@/components/BaseInput.vue";
import validateEmail from "@/utils/validateEmail";
import validatePassword from "@/utils/validatePassword.js";
import {registerUser} from '@/modules/register/services'
import BaseAlert from "../../../components/BaseAlert.vue";
export default {
  data() {
    return {
      email: "",
      name:"",

      password: {
        value: "",
        error: "",
        seen:false
      },

      cpassword: {
        value: "",
        error: "",
        seen:false
      },
      submission:{
        message:'',
        isVerified:false
      }
      
    };
  },
  components: {
    BaseInput,
    BaseAlert
},
 mounted(){
      this.email = this.$route.query.email
      this.name = this.$route.query.name
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
    toggleSeen(event){
      if(event.target.id == 'cpassword'){
        this.cpassword.seen= !this.cpassword.seen
      }
      if(event.target.id == 'password'){
        this.password.seen= !this.password.seen
      }
    },
    async handleSubmit() {
      this.validateField("cpassword")
      if (!this.password.value && !this.cpassword.value) {
        this.submission.message="Password must be provided";
        return;
      }
      if (this.password.value != this.cpassword.value) {
        this.validateField("cpassword");
        this.submission.message ="Passwords are not same"
        return;
      }
      if (!this.password.error && !this.cpassword.error) {
        try {
          // const response = await registerUser({
            // this.formData()
          // });
          this.submission = {message:"Registered Successfully", isVerified:true}
          setTimeout(()=>this.$router.push({name:'login'}),2000)
        } catch (error) {
          this.submission.message =error 
        }
        return;
      } 
      else {
        this.submission.message = "The form is not filled properly"
      }
    },
    formData(){
      return{
        name:this.name,
        email:this.email,
        password:this.password.value,
        roleId:this.$route.query.roleId,
        token:this.$route.params
      }
    }
  },
};
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row w-100 main-container p-3">
      <section class="d-none d-lg-block col-lg-5 register-img"></section>
      <section
        class="
          col-12 col-lg-6
          mx-xl-5
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="register-form-container">
          <div class="register-head">
            <h3 class="register-head-title">Register</h3>
            <sub class="register-head-subtitle"
              >Set your password for the asset management account</sub
            >
          </div>

          <div class="container-fluid mt-5">
            <BaseAlert :submission="submission"/>
            <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="name" class="form-label">Full Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  readonly
                  data-cy="register-name"
                />
              </div>
              <div class="mb-4">
                <label for="email" class="form-label">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  data-cy="register-email"
                  readonly
                />
              </div>
              <div class="mb-4">
                 <label for="password" class="form-label">Password:</label>
                <div class="password-field d-flex">

                  <input
                  class="form-control"
                    name="password"
                    :type="[password.seen? 'text':'password']"
                    id="password"
                    label="Password"
                    placeholder="Set Your Password"
                    v-model="password.value"
                    @keyup="validateField('password')"
                    data-cy="register-password"
                  />
                  <div class="icon" id="password" @click="(event)=>toggleSeen(event)" data-cy="toggle-seen"></div>
                </div>
                 <div v-if="password.error" class="form-text text-danger" v-text="password.error"></div>
              </div>

              <div class="mb-4">
                 <label for="cpassword" class="form-label">Confirm Password:</label>
                <div class="password-field d-flex">
                <input
                class="form-control"
                  name="cpassword"
                  :type="[cpassword.seen ? 'text':'password']"
                  id="cpassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  v-model="cpassword.value"
                  @keyup="validateField('cpassword')"
                  data-cy="register-cpassword"
                />
                <div class="icon" id="cpassword" @click="(event)=>toggleSeen(event)" data-cy="toggle-seen"></div>
                </div>
                
                <div v-if="cpassword.error" class="form-text text-danger" v-text="cpassword.error"></div>
              </div>

              <button class="btn w-100 w-md-50 button-color" data-cy="register-btn" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>