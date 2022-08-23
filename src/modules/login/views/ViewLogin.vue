<script>
import validateEmail from '../../../utils/validateEmail'
import validatePassword from '../../../utils/validatePassword.js'
import BaseInput from '../../../components/BaseInput.vue'
export default{
  data(){
    return{
      email:'',
      password:'',
      cpassword:'',
      isValid:false,
      errorMessage:''
    }
  },
  components:{
    BaseInput
  },
   
  methods:{
    validateField(field){
     let response = {isValid:false, errorMessage:''}
      if (field ==='email'){
        
        response = validateEmail(this.email)
      }
       if (field ==='password'){
        response = validatePassword(this.password)
      }
      if (field ==='cpassword'){
            response.errorMessage= 'Passwords should match'
      }
       this.isValid = response.isValid
       this.errorMessage = response.errorMessage
    }
  },
  handleSubmit(){
    if (!this.isValid){
      alert('Please Fill the Form Correctly')
    }
  }
}
</script>

<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row w-100 border main-container p-3">
      <section class="col-5 login-img "></section>
      <section class="col-6 mx-3  d-flex justify-content-center align-items-center">
        <div class="w-50 ">
            <div class="login-head">
                <h3 class="login-head-title">Sign In</h3>
          <sub class="login-head-subtitle">Sign In to your Asset Management </sub>
            </div>
          
          <div class="container mt-5">
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="email" class="form-label"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Example input placeholder"
                  v-model="email"
                  @field-changed="validateField('email')"
                />
                
              </div>
              <BaseInput
                name="password"
                type="password"
                id="password"
                label="Password"
                placeholder="Set Your Password"
                v-model="password"
                :error="errorMessage" 
                @field-changed="validateField('password')"
              />
              <a class="forgot-password" href="#">Forgot Password</a>
                
              <button class="btn  w-100 button-color" >Sign In</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>