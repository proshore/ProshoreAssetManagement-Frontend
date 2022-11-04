import{B as f}from"./BaseInput.f55e8e94.js";import{T as v,v as g}from"./togglePassword.8c43faa6.js";import{A as _,_ as b,u as y,o as i,c as n,a as e,b as d,e as P,f as c,g as p,t as u,h as w,r as m}from"./index.df438375.js";import{B as x}from"./BaseAlert.4b82e557.js";const S="api/users/reset-password",C={RESETPASSWORD_URL:S},k=async t=>await _.post(C.RESETPASSWORD_URL,t),B={data(){return{password:{value:"",error:"",seen:!1},cpassword:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1},token:"",email:""}},components:{BaseInput:f,BaseAlert:x,TogglePassword:v},mounted(){this.token=this.$route.query.token,this.email=this.$route.query.email},methods:{validateField(t){if(t==="password"){let s=g(this.password.value);this.password.error=s.errorMessage}t==="cpassword"&&(this.password.value!=this.cpassword.value?this.cpassword.error="Passwords should match":this.cpassword.error="")},toggleSeen(t){t==="cpassword"&&(this.cpassword.seen=!this.cpassword.seen),t==="password"&&(this.password.seen=!this.password.seen),console.log(this.password.seen)},async handleSubmit(){const t=y();if(this.validateField("cpassword"),!this.password.value&&!this.cpassword.value){this.submission.message="Password must be provided";return}if(this.password.value!=this.cpassword.value){this.validateField("cpassword"),this.submission.message="Passwords do not match";return}if(!this.password.error&&!this.cpassword.error){try{const s=await k(this.formData());this.submission={message:"Password Changed Successfully",isVerified:!0},t.success("Pasword Changed Successfully"),setTimeout(()=>this.$router.push({name:"login"}),2e3)}catch(s){this.submission.message=s.response.data.message,t.error(`${s.response.data.message}`)}return}else this.submission.message="The form is not filled properly"},formData(){return{token:this.token,email:this.email,password:this.password.value,password_confirmation:this.cpassword.value}}}},T={class:"container-fluid d-flex justify-content-center"},R={class:"row w-100 main-container p-3"},V=e("section",{class:"d-none d-lg-block col-lg-5 register-img"},null,-1),A={class:"col-12 col-lg-6 mx-xl-5 d-flex justify-content-center align-items-center"},D={class:"register-form-container"},E=e("div",{class:"register-head"},[e("h3",{class:"register-head-title"},"Reset your Password"),e("sub",{class:"register-head-subtitle"},"Set your new password for the asset management account")],-1),F={class:"container-fluid mt-5"},U={class:"mb-4"},M=e("label",{for:"password",class:"form-label"},"Password:",-1),N={class:"password-field d-flex"},j=["type"],q=["textContent"],I={class:"mb-4"},K=e("label",{for:"cpassword",class:"form-label"},"Confirm Password:",-1),L={class:"password-field d-flex"},O=["type"],W=["textContent"],Y=e("button",{class:"btn w-100 w-md-50 button-color","data-cy":"reset-btn",type:"submit"}," Submit ",-1);function z(t,s,G,H,o,a){const h=m("BaseAlert"),l=m("TogglePassword");return i(),n("div",T,[e("div",R,[V,e("section",A,[e("div",D,[E,e("div",F,[d(h,{submission:o.submission},null,8,["submission"]),e("form",{onSubmit:s[6]||(s[6]=P((...r)=>a.handleSubmit&&a.handleSubmit(...r),["prevent"]))},[e("div",U,[M,e("div",N,[c(e("input",{class:"form-control",name:"password",type:[o.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Set Your Password","onUpdate:modelValue":s[0]||(s[0]=r=>o.password.value=r),onKeyup:s[1]||(s[1]=r=>a.validateField("password")),"data-cy":"reset-password"},null,40,j),[[p,o.password.value]]),d(l,{seen:o.password.seen,onClicked:s[2]||(s[2]=r=>a.toggleSeen("password"))},null,8,["seen"])]),o.password.error?(i(),n("div",{key:0,class:"form-text text-danger",textContent:u(o.password.error)},null,8,q)):w("",!0)]),e("div",I,[K,e("div",L,[c(e("input",{class:"form-control",name:"cpassword",type:[o.cpassword.seen?"text":"password"],id:"cpassword",label:"Confirm Password",placeholder:"Confirm Password","onUpdate:modelValue":s[3]||(s[3]=r=>o.cpassword.value=r),onKeyup:s[4]||(s[4]=r=>a.validateField("cpassword")),"data-cy":"reset-cpassword"},null,40,O),[[p,o.cpassword.value]]),d(l,{seen:o.cpassword.seen,onClicked:s[5]||(s[5]=r=>a.toggleSeen("cpassword"))},null,8,["seen"])]),o.cpassword.error?(i(),n("div",{key:0,class:"form-text text-danger",textContent:u(o.cpassword.error)},null,8,W)):w("",!0)]),Y],32)])])])])])}const $=b(B,[["render",z]]);export{$ as default};
