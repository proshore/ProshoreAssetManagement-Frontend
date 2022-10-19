import{v as b}from"./validateEmail.64dd81f6.js";import{B as y,v as x}from"./validatePassword.8ee2394f.js";import{B as S}from"./BaseAlert.abcb7602.js";import{l as k}from"./index.9c36ef98.js";import{_ as w,o as n,c as l,a as e,n as B,u as C,b as d,e as P,f as p,v as V,t as _,h as f,g as I,w as M,d as T,r as c,p as L,j as A}from"./index.f3619b4a.js";const D={props:{seen:{type:Boolean,required:!0}}},E={class:"icon"};function F(o,s,m,g,t,r){return n(),l("div",E,[e("i",{class:B(`bi ${m.seen?"bi-eye-fill":"bi-eye-slash-fill"}`),id:"showPassword",onClick:s[0]||(s[0]=u=>o.$emit("clicked")),"data-cy":"toggle-seen"},null,2)])}const N=w(D,[["render",F]]);const j={data(){return{email:{value:"",error:""},password:"",password:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1}}},components:{BaseInput:y,BaseAlert:S,TogglePassword:N},methods:{formData(){return{email:this.email.value,password:this.password.value}},validateField(o){if(o==="email"){let s=b(this.email.value);this.email.error=s.errorMessage}if(o==="password"){let s=x(this.password.value);this.password.error=s.errorMessage}},async handleSubmit(){if(!this.email.value||!this.password.value)return this.submission.message="Fields must not be empty";if(this.email.error||this.password.error)return this.submission.message="Some fields are not filled properly";const o=C();try{const s=await k(this.formData());(s.data.success=!0)&&(this.submission.message="Login Successful",o.success("Logged into Proshore Asset Management"),this.submission.isVerified=!0,localStorage.setItem("data",s.data.data.token),setTimeout(()=>{this.$router.push({name:"dashboard"})},1e3))}catch(s){this.submission.message=s,o.error("Something went wrong")}},toggleSeen(){this.password.seen=!this.password.seen}}},i=o=>(L("data-v-b915f4ba"),o=o(),A(),o),U={class:"container-fluid d-flex justify-content-center"},K={class:"row w-100 border main-container p-3"},R=i(()=>e("section",{class:"col-5 login-img"},null,-1)),q={class:"col-6 mx-3 d-flex justify-content-center align-items-center"},z={class:"w-50"},Y=i(()=>e("div",{class:"login-head"},[e("h3",{class:"login-head-title"},"Sign In"),e("sub",{class:"login-head-subtitle"},"Sign In to your Asset Management ")],-1)),$={class:"container-fluid mt-5"},G={class:"mb-4"},H=i(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),J=["textContent"],O={class:"mb-4"},Q=i(()=>e("label",{for:"password",class:"form-label"},"Password:",-1)),W={class:"password-field d-flex"},X=["type"],Z=["textContent"],ss={class:"row my-3"},es=T("Forgot Password"),os=i(()=>e("button",{class:"btn w-100 button-color","data-cy":"login-btn",href:"/dashboard"}," Sign In ",-1));function ts(o,s,m,g,t,r){const u=c("BaseAlert"),h=c("TogglePassword"),v=c("RouterLink");return n(),l("div",U,[e("div",K,[R,e("section",q,[e("div",z,[Y,e("div",$,[d(u,{submission:t.submission},null,8,["submission"]),e("form",{onSubmit:s[5]||(s[5]=P((...a)=>r.handleSubmit&&r.handleSubmit(...a),["prevent"]))},[e("div",G,[H,p(e("input",{type:"email",class:"form-control",id:"email",placeholder:"Example input placeholder","onUpdate:modelValue":s[0]||(s[0]=a=>t.email.value=a),onKeyup:s[1]||(s[1]=a=>r.validateField("email")),"data-cy":"login-email"},null,544),[[V,t.email.value]]),t.email.error?(n(),l("div",{key:0,class:"form-text text-danger",textContent:_(t.email.error)},null,8,J)):f("",!0)]),e("div",O,[Q,e("div",W,[p(e("input",{class:"form-control",name:"password",type:[t.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Enter Your Password","onUpdate:modelValue":s[2]||(s[2]=a=>t.password.value=a),onKeyup:s[3]||(s[3]=a=>r.validateField("password")),"data-cy":"login-password"},null,40,X),[[I,t.password.value]]),d(h,{seen:t.password.seen,onClicked:s[4]||(s[4]=a=>r.toggleSeen("password"))},null,8,["seen"])]),t.password.error?(n(),l("div",{key:0,class:"form-text text-danger",textContent:_(t.password.error)},null,8,Z)):f("",!0)]),e("div",null,[e("div",ss,[d(v,{class:"forgot-password",to:{name:"forgotpassword"},"data-cy":"login-forgot-password"},{default:M(()=>[es]),_:1})])]),os],32)])])])])])}const ds=w(j,[["render",ts],["__scopeId","data-v-b915f4ba"]]);export{ds as default};
