import"./validateEmail.64dd81f6.js";import{B as v}from"./BaseInput.bb4b9d2b.js";import{B as y}from"./BaseAlert.7bb7e9b7.js";import{l as x}from"./index.c843788c.js";import{_ as g,o as l,c as i,a as s,n as B,u as S,b as d,e as k,f as p,v as I,t as _,h as f,g as C,w as P,d as V,r as c,p as E,j as T}from"./index.a5eff91b.js";const A={props:{seen:{type:Boolean,required:!0}}},D={class:"icon"};function L(t,e,m,w,o,r){return l(),i("div",D,[s("i",{class:B(`bi ${m.seen?"bi-eye-fill":"bi-eye-slash-fill"}`),id:"showPassword",onClick:e[0]||(e[0]=u=>t.$emit("clicked")),"data-cy":"toggle-seen"},null,2)])}const M=g(A,[["render",L]]);const N={data(){return{email:{value:"",error:""},password:"",password:{value:"",error:"",seen:!1},submission:{message:"",isVerified:!1}}},components:{BaseInput:v,BaseAlert:y,TogglePassword:M},methods:{formData(){return{email:this.email.value,password:this.password.value}},async handleSubmit(){document.getElementById("loginBtn").disabled="true";const t=S();try{const e=await x(this.formData());console.log("working"),console.log(e.data),e.data.status=="Success"&&(t.success("Logged into Proshore Asset Management"),this.submission.isVerified=!0,localStorage.setItem("data",e.data.data.token),document.getElementById("loginBtn").disabled=!1,console.log("working"),this.$router.push({name:"dashboard"}))}catch{t.error("Email or Password did not match")}},toggleSeen(){this.password.seen=!this.password.seen}}},n=t=>(E("data-v-ba0f2faa"),t=t(),T(),t),j={class:"container-fluid d-flex justify-content-center"},U={class:"row w-100 border main-container p-3"},R=n(()=>s("section",{class:"col-5 login-img"},null,-1)),q={class:"col-6 mx-3 d-flex justify-content-center align-items-center"},z={class:"w-50"},F=n(()=>s("div",{class:"login-head"},[s("h3",{class:"login-head-title"},"Sign In"),s("sub",{class:"login-head-subtitle"},"Sign In to your Asset Management ")],-1)),Y={class:"container-fluid mt-5"},$={class:"mb-4"},G=n(()=>s("label",{for:"email",class:"form-label"},"Email",-1)),H=["textContent"],J={class:"mb-4"},K=n(()=>s("label",{for:"password",class:"form-label"},"Password:",-1)),O={class:"password-field d-flex"},Q=["type"],W=["textContent"],X=n(()=>s("button",{class:"btn w-100 button-color",id:"loginBtn","data-cy":"login-btn",href:"/dashboard"}," Sign In ",-1)),Z={class:"row my-3"},ss=V("Forgot Password");function es(t,e,m,w,o,r){const u=c("BaseAlert"),h=c("TogglePassword"),b=c("RouterLink");return l(),i("div",j,[s("div",U,[R,s("section",q,[s("div",z,[F,s("div",Y,[d(u,{submission:o.submission},null,8,["submission"]),s("form",{onSubmit:e[3]||(e[3]=k((...a)=>r.handleSubmit&&r.handleSubmit(...a),["prevent"])),class:"form-container"},[s("div",$,[G,p(s("input",{type:"email",class:"form-control",id:"email",placeholder:"Example input placeholder","onUpdate:modelValue":e[0]||(e[0]=a=>o.email.value=a),"data-cy":"login-email"},null,512),[[I,o.email.value]]),o.email.error?(l(),i("div",{key:0,class:"form-text text-danger",textContent:_(o.email.error)},null,8,H)):f("",!0)]),s("div",J,[K,s("div",O,[p(s("input",{class:"form-control",name:"password",type:[o.password.seen?"text":"password"],id:"password",label:"Password",placeholder:"Enter Your Password","onUpdate:modelValue":e[1]||(e[1]=a=>o.password.value=a),"data-cy":"login-password"},null,8,Q),[[C,o.password.value]]),d(h,{seen:o.password.seen,onClicked:e[2]||(e[2]=a=>r.toggleSeen("password"))},null,8,["seen"])]),o.password.error?(l(),i("div",{key:0,class:"form-text text-danger",textContent:_(o.password.error)},null,8,W)):f("",!0)]),X,s("div",Z,[d(b,{class:"forgot-password",to:{name:"forgotpassword"},"data-cy":"login-forgot-password"},{default:P(()=>[ss]),_:1})])],32)])])])])])}const ls=g(N,[["render",es],["__scopeId","data-v-ba0f2faa"]]);export{ls as default};
