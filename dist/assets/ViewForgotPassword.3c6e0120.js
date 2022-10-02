import{B as u}from"./BaseAlert.18cfe008.js";import{v as _}from"./validateEmail.4d4a0f2a.js";import{f as b}from"./index.9ddc27aa.js";import{_ as f,r as h,o as l,c as r,a as e,b as p,m as v,f as g,v as w,t as d,g as c,p as y,i as x}from"./index.5cfb79dc.js";const k={data(){return{email:{value:"",error:""},submission:{message:"",isVerified:!1},buttonText:"Send Link"}},components:{BaseAlert:u},methods:{formData(){this.email.value},validateField(){let t=_(this.email.value);return this.email.error=t.errorMessage,t.isValid},async handleSubmit(){if(!!this.validateField())try{this.buttonText="Sending ...";const t=await b(this.formData());this.$router.push({name:"sentmail"})}catch(t){this.submission.message=t}},backPage(){this.$router.go(-1)}}},n=t=>(y("data-v-b7da1a2f"),t=t(),x(),t),S={class:"container-fluid d-flex justify-content-center"},P={class:"row w-100 border main-container p-3"},V=n(()=>e("section",{class:"col-5 login-img"},null,-1)),B={class:"col-6 mx-3 d-flex justify-content-center align-items-center form-container"},F=n(()=>e("i",{class:"bi bi-arrow-left-short",style:{"font-size":"2rem"}},null,-1)),C=[F],T={class:"w-50"},D=n(()=>e("div",{class:"login-head"},[e("h3",{class:"login-head-title"},"Forgot Password"),e("sub",{class:"login-head-subtitle"},"Please enter a valid email address so that a link shall be sent to reset your password ")],-1)),E={class:"container-fluid mt-5"},I={class:"mb-4"},A=n(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),M=["textContent"],N=n(()=>e("div",null,null,-1)),j={class:"btn w-100 button-color","data-cy":"forgot-password-btn"},L={key:0,class:"bi bi-link-45deg me-2"};function z(t,s,K,U,o,i){const m=h("BaseAlert");return l(),r("div",S,[e("div",P,[V,e("section",B,[e("button",{class:"back-btn",onClick:s[0]||(s[0]=(...a)=>i.backPage&&i.backPage(...a)),"data-cy":"back-btn-forgot"},C),e("div",T,[D,e("div",E,[p(m,{submission:o.submission},null,8,["submission"]),e("form",{onSubmit:s[3]||(s[3]=v((...a)=>i.handleSubmit&&i.handleSubmit(...a),["prevent"]))},[e("div",I,[A,g(e("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter your email","onUpdate:modelValue":s[1]||(s[1]=a=>o.email.value=a),onKeyup:s[2]||(s[2]=a=>i.validateField("email")),"data-cy":"login-email"},null,544),[[w,o.email.value]]),o.email.error?(l(),r("div",{key:0,class:"form-text text-danger",textContent:d(o.email.error)},null,8,M)):c("",!0)]),N,e("button",j,[o.buttonText=="Send Link"?(l(),r("i",L)):c("",!0),e("span",null,d(o.buttonText),1)])],32)])])])])])}const O=f(k,[["render",z],["__scopeId","data-v-b7da1a2f"]]);export{O as default};