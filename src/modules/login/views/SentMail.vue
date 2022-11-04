<script>
    import BaseAlert from '@/components/BaseAlert.vue';
    import validateEmail from '@/utils/validateEmail';
    import {forgotPassword} from "../services"
    import { useToast } from "vue-toastification"
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
      handleSubmit() {
        const toast = useToast();
        if (!this.validateField()) return
        try {
          this.buttonText = "Sending ..."
          setTimeout(async ()=>{
          const response = await forgotPassword(this.formData());
          toast.success("Mail Sent Successfully");
          this.$router.push({name:'resetpassword'})
          },2000)
          
          
        } catch (error) {
          toast.error("Could not send mail")
          this.submission.message = error;
        }
      },
      backPage(){
        this.$router.go(-2)
      }
    },
      }
  </script>
  
  <template>
       <div class="container-fluid d-flex justify-content-center">
      <div class="row w-100 border main-container p-3">
        <section class="col-5 login-img"></section>
        <section
          class="col-6 mx-3 d-flex justify-content-center align-items-center form-container"
        >
        <button class="back-btn" @click="backPage" data-cy="back-btn-forgot-done"> <i class=" bi bi-arrow-left-short" style="font-size:2rem;"></i></button>
          <div class="w-50">
            <div class="login-head">
              <h3 class="login-head-title">Check Your Email</h3>
              <sub class="login-head-subtitle"
                >A link has been sent to your email address to reset your password
              </sub>
              
            </div>
  
            <div class="container-fluid mt-5">
              
  
                <button class="btn w-100 button-color" data-cy="forgot-password-done-btn" @click="this.$router.push({name:'login'})" >
                  Done
                </button>
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
      border:none;
      border-radius:50%;
      background-color: #F8F8F8 !important;
      padding:0 8px;
    }
    </style>