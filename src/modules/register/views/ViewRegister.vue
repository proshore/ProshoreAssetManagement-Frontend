<script>
import useValidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
export default{
  data(){
    return{
      v$:useValidate(),
      email:'',
      password:{
        password:'',
        cpassword:''
      }
    }
  },
   validations(){
      return{
      email:{required},
      password:{
        password:{required},
        cpassword:{required}
      }
    }
    },
  methods:{
   
    validateField(){
      this.v$.validate()
      if (!this.v$.$error){
          alert("Validation")
      }
      else{
        alert('Not Validated')
      }
      
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
            <form>
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Example input placeholder"
                  @click="validateField"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  @click="validateField"
                />
              </div>
              <div class="mb-3">
                <label for="c-password" class="form-label"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="c-password"
                  placeholder="Confirm Password"
                  @click="validateField"
                />
              </div>
              <button class="btn btn-warning w-100">Register</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>