<script>
import validateEmail from '../../../utils/validateEmail'
import validatePassword from '@/utils/validatePassword.js'
import BaseInput from '@/components/BaseInput.vue'
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
        console.log('entered validation method');
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
      <section class="col-5 register-img "></section>
      <section class="col-6 mx-3  d-flex justify-content-center align-items-center">
        <div class="w-50 ">
            <div class="register-head">
                <h3 class="register-head-title">Register</h3>
          <sub class="register-head-subtitle">Set your password for the asset management account</sub>
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
                <BaseInput
                name="cpassword"
                  type="password"
                  id="cpassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  v-model="cpassword"
                  :error="errorMessage"
                  @field-changed="validateField('cpassword')"
                />
                
              <button class="btn  w-100 button-color" >Register</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>