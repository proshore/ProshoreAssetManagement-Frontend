import{B as f,v as g}from"./validatePassword.b67fc9c6.js";import{T as v,r as _}from"./togglePassword.7416c35f.js";import{B as b}from"./BaseAlert.7a4914e7.js";import{_ as y,o as i,c as n,a as s,b as d,e as x,f as c,g as p,t as w,h as m,r as u}from"./index.a506f712.js";/* empty css                                                                  */const P={data(){return{password:{value:"",error:"",seen:!1},cpassword:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1}}},components:{BaseInput:f,BaseAlert:b,TogglePassword:v},methods:{validateField(r){if(r==="password"){let e=g(this.password.value);this.password.error=e.errorMessage}r==="cpassword"&&(this.password.value!=this.cpassword.value?this.cpassword.error="Passwords should match":this.cpassword.error="")},toggleSeen(r){r=="cpassword"&&(this.cpassword.seen=!this.cpassword.seen),r=="password"&&(this.password.seen=!this.password.seen),console.log(this.password.seen)},async handleSubmit(){if(this.validateField("cpassword"),!this.password.value&&!this.cpassword.value){this.submission.message="Password must be provided";return}if(this.password.value!=this.cpassword.value){this.validateField("cpassword"),this.submission.message="Passwords do not match";return}if(!this.password.error&&!this.cpassword.error){try{const r=await _(this.formData());this.submission={message:"Password Changed Successfully",isVerified:!0},console.log("response:",r),setTimeout(()=>this.$router.push({name:"login"}),2e3)}catch(r){this.submission.message=r}return}else this.submission.message="The form is not filled properly"},formData(){return{data:{password:this.password.value},token:"1bxXVTgMmdgiClqXZ8Rdmg"}}}},C={class:"container-fluid d-flex justify-content-center"},S={class:"row w-100 main-container p-3"},B=s("section",{class:"d-none d-lg-block col-lg-5 register-img"},null,-1),V={class:"col-12 col-lg-6 mx-xl-5 d-flex justify-content-center align-items-center"},k={class:"register-form-container"},T=s("div",{class:"register-head"},[s("h3",{class:"register-head-title"},"Reset your Password"),s("sub",{class:"register-head-subtitle"},"Set your new password for the asset management account")],-1),D={class:"container-fluid mt-5"},F={class:"mb-4"},M=s("label",{for:"password",class:"form-label"},"Password:",-1),A={class:"password-field d-flex"},N=["type"],R=["textContent"],U={class:"mb-4"},j=s("label",{for:"cpassword",class:"form-label"},"Confirm Password:",-1),K={class:"password-field d-flex"},X=["type"],q=["textContent"],E=s("button",{class:"btn w-100 w-md-50 button-color","data-cy":"reset-btn",type:"submit"}," Submit ",-1);function I(r,e,Y,Z,o,a){const h=u("BaseAlert"),l=u("TogglePassword");return i(),n("div",C,[s("div",S,[B,s("section",V,[s("div",k,[T,s("div",D,[d(h,{submission:o.submission},null,8,["submission"]),s("form",{onSubmit:e[6]||(e[6]=x((...t)=>a.handleSubmit&&a.handleSubmit(...t),["prevent"]))},[s("div",F,[M,s("div",A,[c(s("input",{class:"form-control",name:"password",type:[o.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Set Your Password","onUpdate:modelValue":e[0]||(e[0]=t=>o.password.value=t),onKeyup:e[1]||(e[1]=t=>a.validateField("password")),"data-cy":"reset-password"},null,40,N),[[p,o.password.value]]),d(l,{seen:o.password.seen,onClicked:e[2]||(e[2]=t=>a.toggleSeen("password"))},null,8,["seen"])]),o.password.error?(i(),n("div",{key:0,class:"form-text text-danger",textContent:w(o.password.error)},null,8,R)):m("",!0)]),s("div",U,[j,s("div",K,[c(s("input",{class:"form-control",name:"cpassword",type:[o.cpassword.seen?"text":"password"],id:"cpassword",label:"Confirm Password",placeholder:"Confirm Password","onUpdate:modelValue":e[3]||(e[3]=t=>o.cpassword.value=t),onKeyup:e[4]||(e[4]=t=>a.validateField("cpassword")),"data-cy":"reset-cpassword"},null,40,X),[[p,o.cpassword.value]]),d(l,{seen:o.cpassword.seen,onClicked:e[5]||(e[5]=t=>a.toggleSeen("cpassword"))},null,8,["seen"])]),o.cpassword.error?(i(),n("div",{key:0,class:"form-text text-danger",textContent:w(o.cpassword.error)},null,8,q)):m("",!0)]),E],32)])])])])])}const O=y(P,[["render",I]]);export{O as default};
