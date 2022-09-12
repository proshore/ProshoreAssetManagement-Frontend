<script>
    import BaseAlert from '@/components/BaseAlert.vue';
    import validateEmail from '@/utils/validateEmail';
  import router from '../../../router';
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
      handleSubmit() {
        
        if (!this.validateField()) return
        try {
          this.buttonText = "Sending ..."
          setTimeout(async ()=>{
          const response = await forgotPassword(this.formData());
          console.log("response",response);
          this.$router.push({name:'sentmail'})
          },2000)
          
          
        } catch (error) {
          this.submission.message = error;
        }
      }
    },
      }
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
              <h3 class="login-head-title">Check Your Email</h3>
              <sub class="login-head-subtitle"
                >A link has been sent to your email address to reset your password
              </sub>
              <br/>
              <sub class="login-head-subtitle">Resend in: 00:00</sub>
            </div>
  
            <div class="container-fluid mt-5">
              
  
                <button class="btn w-100 button-color" data-cy="forgot-password-btn" @click="this.$router.push({name:'login'})" >
                  Done
                </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>