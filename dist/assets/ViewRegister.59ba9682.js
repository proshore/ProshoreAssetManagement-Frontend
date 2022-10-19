import{B as g,v}from"./validatePassword.4ccd8eb2.js";import"./validateEmail.64dd81f6.js";import{T as _,r as b}from"./togglePassword.ab884d8c.js";import{B as y}from"./BaseAlert.731ba034.js";import{_ as x,r as c,o as l,c as n,a as s,b as d,e as P,f as i,v as p,g as u,t as w,h}from"./index.74ce8c9d.js";const k={data(){return{email:"",name:"",token:"",password:{value:"",error:"",seen:!1},cpassword:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1}}},components:{BaseInput:g,BaseAlert:y,TogglePassword:_},mounted(){this.email=this.$route.query.email,this.name=this.$route.query.name,this.token=this.$route.params.token,console.log(this.token)},methods:{validateField(r){if(r==="password"){let e=v(this.password.value);this.password.error=e.errorMessage}r==="cpassword"&&(this.password.value!=this.cpassword.value?this.cpassword.error="Passwords should match":this.cpassword.error="")},toggleSeen(r){r=="cpassword"&&(this.cpassword.seen=!this.cpassword.seen),r=="password"&&(this.password.seen=!this.password.seen),console.log(this.password.seen)},async handleSubmit(){if(this.validateField("cpassword"),!this.password.value&&!this.cpassword.value){this.submission.message="Password must be provided";return}if(this.password.value!=this.cpassword.value){this.validateField("cpassword"),this.submission.message="Passwords are not same";return}if(!this.password.error&&!this.cpassword.error){try{const r=await b(this.formData());this.submission={message:"Registered Successfully",isVerified:!0},console.log("response:",r),setTimeout(()=>this.$router.push({name:"login"}),2e3)}catch(r){this.submission.message=r}return}else this.submission.message="The form is not filled properly"},formData(){return{data:{name:this.name,email:this.email,password:this.password.value},token:"1bxXVTgMmdgiClqXZ8Rdmg"}}}},C={class:"container-fluid d-flex justify-content-center"},S={class:"row w-100 main-container p-3"},V=s("section",{class:"d-none d-lg-block col-lg-5 register-img"},null,-1),B={class:"col-12 col-lg-6 mx-xl-5 d-flex justify-content-center align-items-center"},T={class:"register-form-container"},F=s("div",{class:"register-head"},[s("h3",{class:"register-head-title"},"Register"),s("sub",{class:"register-head-subtitle"},"Set your password for the asset management account")],-1),D={class:"container-fluid mt-5"},M={class:"mb-4"},R=s("label",{for:"name",class:"form-label"},"Full Name:",-1),U={class:"mb-4"},N=s("label",{for:"email",class:"form-label"},"Email:",-1),q={class:"mb-4"},A=s("label",{for:"password",class:"form-label"},"Password:",-1),j={class:"password-field d-flex"},E=["type"],K=["textContent"],X={class:"mb-4"},I=s("label",{for:"cpassword",class:"form-label"},"Confirm Password:",-1),Y={class:"password-field d-flex"},Z=["type"],z=["textContent"],G=s("button",{class:"btn w-100 w-md-50 button-color","data-cy":"register-btn",type:"submit"}," Register ",-1);function H(r,e,J,L,o,a){const f=c("BaseAlert"),m=c("TogglePassword");return l(),n("div",C,[s("div",S,[V,s("section",B,[s("div",T,[F,s("div",D,[d(f,{submission:o.submission},null,8,["submission"]),s("form",{onSubmit:e[8]||(e[8]=P((...t)=>a.handleSubmit&&a.handleSubmit(...t),["prevent"]))},[s("div",M,[R,i(s("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),readonly:"","data-cy":"register-name"},null,512),[[p,o.name]])]),s("div",U,[N,i(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>o.email=t),"data-cy":"register-email",readonly:""},null,512),[[p,o.email]])]),s("div",q,[A,s("div",j,[i(s("input",{class:"form-control",name:"password",type:[o.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Set Your Password","onUpdate:modelValue":e[2]||(e[2]=t=>o.password.value=t),onKeyup:e[3]||(e[3]=t=>a.validateField("password")),"data-cy":"register-password"},null,40,E),[[u,o.password.value]]),d(m,{seen:o.password.seen,onClicked:e[4]||(e[4]=t=>a.toggleSeen("password"))},null,8,["seen"])]),o.password.error?(l(),n("div",{key:0,class:"form-text text-danger",textContent:w(o.password.error)},null,8,K)):h("",!0)]),s("div",X,[I,s("div",Y,[i(s("input",{class:"form-control",name:"cpassword",type:[o.cpassword.seen?"text":"password"],id:"cpassword",label:"Confirm Password",placeholder:"Confirm Password","onUpdate:modelValue":e[5]||(e[5]=t=>o.cpassword.value=t),onKeyup:e[6]||(e[6]=t=>a.validateField("cpassword")),"data-cy":"register-cpassword"},null,40,Z),[[u,o.cpassword.value]]),d(m,{seen:o.cpassword.seen,onClicked:e[7]||(e[7]=t=>a.toggleSeen("cpassword"))},null,8,["seen"])]),o.cpassword.error?(l(),n("div",{key:0,class:"form-text text-danger",textContent:w(o.cpassword.error)},null,8,z)):h("",!0)]),G],32)])])])])])}const es=x(k,[["render",H]]);export{es as default};
