<script>
  import BaseAlert from '@/components/BaseAlert.vue';
  import validateEmail from '@/utils/validateEmail';
  import {forgotPassword} from "../services"
    export default{
        data(){
            return{
                email:{
                    value:'',
                    error:''
                },
                submission:{
                  message:'',
                  isVerified:false
                },
                 buttonText:"Send Link"
            }
        },
        components:{
          BaseAlert
        },
        methods: {
    formData() {
      ({
        email: this.email.value,
      });
    },
    validateField() {
        let response = validateEmail(this.email.value);
        this.email.error = response.errorMessage;
        return response.isValid
    },
    async handleSubmit() {
      
      if (!this.validateField()) return
      try {
        this.buttonText = "Sending ..."
        
        const response = await forgotPassword(this.formData());
        console.log("response",response);
        this.$router.push({name:'sentmail'})
        
        
        
      } catch (error) {
        this.submission.message = error;
      }
    },
    backPage(){
      this.$router.go(-1)
    }
  },
    }
</script>

<template>
     <div class="container-fluid d-flex justify-content-center">
    <div class="row w-100 border main-container p-3">
      <section class="col-5 login-img"></section>
      <!-- the following section and viewSendMail could be divided into two components and displayed here conditionally to reduce redundency and extra coding   -->
      <section
        class="col-6 mx-3 d-flex justify-content-center align-items-center form-container"
      >
      <button class="btn back-btn" @click="backPage" data-cy="back-btn-forgot">&#8592;</button>
        <div class="w-50">
          <div class="login-head">
            <h3 class="login-head-title">Forgot Password</h3>
            <sub class="login-head-subtitle"
              >Please enter a valid email address so that a link shall be sent to reset your password
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
                  placeholder="Enter your email"
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
              <div>
                
               
              </div>
              

              <button class="btn w-100 button-color" data-cy="forgot-password-btn" >
                {{buttonText}}
              </button>
            </form>
          </div>
        </div>
       
      </section>
    </div>
  </div>
</template>
<style scoped>
.form-container{
  position:relative;
}
.back-btn{
  position:absolute;
  top:0;
  left:0;
  border-radius:50%;
  background-color: #F8F8F8 !important;
}
</style>