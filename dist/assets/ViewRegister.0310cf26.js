import{B as g,v}from"./validatePassword.14c9ddff.js";import"./validateEmail.64dd81f6.js";import{T as b,r as _}from"./togglePassword.7d474920.js";import{B as y}from"./BaseAlert.cfd73006.js";import{_ as x,u as B,o as n,c as l,a as s,b as d,e as P,f as i,v as c,g as p,t as u,h as w,r as h}from"./index.6db3dab6.js";const S={data(){return{email:"",name:"",token:"",password:{value:"",error:"",seen:!1},cpassword:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1}}},components:{BaseInput:g,BaseAlert:y,TogglePassword:b},mounted(){this.email=this.$route.query.email,this.name=this.$route.query.name,this.token=this.$route.params.token},methods:{validateField(r){if(r==="password"){let e=v(this.password.value);this.password.error=e.errorMessage}r==="cpassword"&&(this.password.value!=this.cpassword.value?this.cpassword.error="Passwords should match":this.cpassword.error="")},toggleSeen(r){r=="cpassword"&&(this.cpassword.seen=!this.cpassword.seen),r=="password"&&(this.password.seen=!this.password.seen),console.log(this.password.seen)},async handleSubmit(){if(document.getElementById("registerBtn").disabled="true",this.validateField("cpassword"),!this.password.value&&!this.cpassword.value){this.submission.message="Password must be provided";return}if(this.password.value!=this.cpassword.value){this.validateField("cpassword"),this.submission.message="Passwords are not same";return}const r=B();if(!this.password.error&&!this.cpassword.error){try{const e=await _(this.formData());this.submission={message:"Registered Successfully",isVerified:!0},r.success("You have been registered in the Proshore Asset Management System"),this.$router.push({name:"login"})}catch(e){document.getElementById("registerBtn").disabled=!1,this.submission.message=e.response.data.message,r.error("Something went wrong")}return}else this.submission.message="The form is not filled properly"},formData(){return{name:this.name,email:this.email,password:this.password.value,password_confirmation:this.cpassword.value,token:this.token}}}},k={class:"container-fluid d-flex justify-content-center"},C={class:"row w-100 main-container p-3"},V=s("section",{class:"d-none d-lg-block col-lg-5 register-img"},null,-1),T={class:"col-12 col-lg-6 mx-xl-5 d-flex justify-content-center align-items-center"},F={class:"register-form-container"},D=s("div",{class:"register-head"},[s("h3",{class:"register-head-title"},"Register"),s("sub",{class:"register-head-subtitle"},"Set your password for the asset management account")],-1),M={class:"container-fluid mt-5"},U={class:"mb-4"},A=s("label",{for:"name",class:"form-label"},"Full Name:",-1),E={class:"mb-4"},N=s("label",{for:"email",class:"form-label"},"Email:",-1),R={class:"mb-4"},I=s("label",{for:"password",class:"form-label"},"Password:",-1),j={class:"password-field d-flex"},q=["type"],K=["textContent"],Y={class:"mb-4"},z=s("label",{for:"cpassword",class:"form-label"},"Confirm Password:",-1),G={class:"password-field d-flex"},H=["type"],J=["textContent"],L=s("button",{class:"btn w-100 w-md-50 button-color",id:"registerBtn","data-cy":"register-btn",type:"submit"}," Register ",-1);function O(r,e,Q,W,o,a){const f=h("BaseAlert"),m=h("TogglePassword");return n(),l("div",k,[s("div",C,[V,s("section",T,[s("div",F,[D,s("div",M,[d(f,{submission:o.submission},null,8,["submission"]),s("form",{onSubmit:e[8]||(e[8]=P((...t)=>a.handleSubmit&&a.handleSubmit(...t),["prevent"]))},[s("div",U,[A,i(s("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),readonly:"","data-cy":"register-name"},null,512),[[c,o.name]])]),s("div",E,[N,i(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>o.email=t),"data-cy":"register-email",readonly:""},null,512),[[c,o.email]])]),s("div",R,[I,s("div",j,[i(s("input",{class:"form-control",name:"password",type:[o.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Set Your Password","onUpdate:modelValue":e[2]||(e[2]=t=>o.password.value=t),onKeyup:e[3]||(e[3]=t=>a.validateField("password")),"data-cy":"register-password"},null,40,q),[[p,o.password.value]]),d(m,{seen:o.password.seen,onClicked:e[4]||(e[4]=t=>a.toggleSeen("password"))},null,8,["seen"])]),o.password.error?(n(),l("div",{key:0,class:"form-text text-danger",textContent:u(o.password.error)},null,8,K)):w("",!0)]),s("div",Y,[z,s("div",G,[i(s("input",{class:"form-control",name:"cpassword",type:[o.cpassword.seen?"text":"password"],id:"cpassword",label:"Confirm Password",placeholder:"Confirm Password","onUpdate:modelValue":e[5]||(e[5]=t=>o.cpassword.value=t),onKeyup:e[6]||(e[6]=t=>a.validateField("cpassword")),"data-cy":"register-cpassword"},null,40,H),[[p,o.cpassword.value]]),d(m,{seen:o.cpassword.seen,onClicked:e[7]||(e[7]=t=>a.toggleSeen("cpassword"))},null,8,["seen"])]),o.cpassword.error?(n(),l("div",{key:0,class:"form-text text-danger",textContent:u(o.cpassword.error)},null,8,J)):w("",!0)]),L],32)])])])])])}const os=x(S,[["render",O]]);export{os as default};
