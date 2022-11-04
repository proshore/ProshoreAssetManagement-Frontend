import{v as L}from"./validateEmail.64dd81f6.js";import{k as h,A as b,_ as x,u as v,r as g,o as c,c as m,a as e,b as I,f as y,v as $,t as d,h as V,l as U,F as w,d as u,m as C,p as N,j as T,q as R,n as f}from"./index.a5eff91b.js";import{B as D}from"./BaseAlert.7bb7e9b7.js";import{_ as M,a as B}from"./x-lg.88adf61e.js";const F=s=>{const t={isValid:!1,errorMessage:""},l=/^[a-zA-Z0-9_ ]*$/i;return s.length<3&&(t.errorMessage="Name should be at least 3 letters long",t.isValid=!1),l.test(s)||(t.errorMessage="Please enter a valid username",t.isValid=!1),{...t,isValid:!0}},j="api/users/invite",z="/api/users/invite/resend",q="/api/users/invite/revoke",O="",K="api/users/invite",p={INVITE_URL:j,RESEND_INVITE_URL:z,REVOKE_INVITE_URL:q,DELETE_INVITE_URL:O,INVITATION_LIST_URL:K},P=async s=>{const t={headers:{"Content-Type":"application/json",Authorization:"Bearer "+h()}};return await b.post(p.INVITE_URL,s,t)},Y=async s=>{const t={headers:{"Content-Type":"application/json",Authorization:"Bearer "+h()}};return await b.post(`${p.RESEND_INVITE_URL}/${s.id}`,s,t)},Z=async s=>{const t={headers:{"Content-Type":"application/json",Authorization:"Bearer "+h()}};return await b.get(`${p.REVOKE_INVITE_URL}/${s.id}`,t)},G=async()=>{const s={headers:{"Content-Type":"application/json",Authorization:"Bearer "+h()}};return await b.get(p.INVITATION_LIST_URL,s)};const H={name:"InviteUser",data(){return{name:{value:"",error:""},email:{value:"",error:""},role_id:{value:0},submission:{message:"",isVerified:!1}}},components:{BaseAlert:D},methods:{formData(){return{email:this.email.value,name:this.name.value,role_id:parseInt(this.role_id.value)}},clearFormData(){this.email.value="",this.email.error="",this.name.value="",this.name.error="",this.role_id.value=0,this.submission.message="",this.submission.isVerified=!1},validateField(s){if(s==="name"){let t=F(this.name.value);this.name.error=t.errorMessage}if(s==="email"){let t=L(this.email.value);this.email.error=t.errorMessage}},async handleSubmit(){if(this.submission.isVerified)return;if(!this.name.value||!this.email.value||!this.role_id.value)return this.submission.message="Field must not be empty";if(this.name.error||this.email.error)return this.submission.message="Some fields are not filled properly";const s=v();try{const t=await P(this.formData());console.log(t),this.submission.isVerified=!0,this.submission.message=t.data.message,s.success(`invited ${this.email.value} successfully`),setTimeout(()=>{document.getElementById("inviteBtn").setAttribute("data-bs-dismiss","modal"),document.getElementById("inviteBtn").click(),this.clearFormData()},2e3)}catch(t){console.log(t),this.submission.message=t.response.data.message,s.error("Something went wrong")}}}},J=e("button",{type:"button",class:"btn invite-button button-color px-4 py-2","data-cy":"invite-btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[e("i",{class:"bi bi-plus-lg me-2",style:{"font-size":"1.5rem"}}),u(" Invite member ")],-1),Q={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},W={class:"modal-dialog"},X={class:"modal-content"},ee={class:"add-a-dialog-box screen"},te=C('<div class="title"><div class="title-left"><div class="header-frame"><img src="'+M+'" alt="" class="plus-stroke"><div class="invite-new-member">Invite new member</div></div><p class="add-a-new-member-to-proshore"> Add a new member to proshore </p></div><div class="close-button"><button class="close-rectangle" type="button" data-cy="close-invite-btn" data-bs-dismiss="modal"><img src="'+B+'" alt="" class="x-lg"></button></div></div>',1),se={class:"row w-100 d-flex justify-content-center"},oe={class:"input-frame"},ae={class:"input-with-label"},ne=e("div",{class:"label"},"Full Name",-1),ie=["textContent"],le={class:"input-with-label"},re=e("div",{class:"label"},"Email",-1),de=["textContent"],ce={class:"input-with-label"},me=e("div",{class:"label"},"Role",-1),ue=e("option",{selected:"",value:"0"},"Select a Role",-1),_e=e("option",{"data-cy":"invite-select-employee",value:"1"}," Employee ",-1),ve=e("option",{"data-cy":"invite-select-vendor",value:"2"},"Vendor",-1),he=[ue,_e,ve],be={class:"button-frame"},pe=e("div",{class:"outline-button"},[e("button",{class:"primary button",type:"button","data-cy":"invite-cancel-btn","data-bs-dismiss":"modal"}," Cancel ")],-1),ye={class:"invite-button"};function fe(s,t,l,k,o,a){const r=g("BaseAlert");return c(),m(w,null,[J,e("div",Q,[e("div",W,[e("div",X,[e("div",ee,[te,e("div",se,[I(r,{submission:o.submission},null,8,["submission"])]),e("div",oe,[e("div",ae,[ne,y(e("input",{type:"text",placeholder:"Username",class:"input-text","onUpdate:modelValue":t[0]||(t[0]=n=>o.name.value=n),onKeyup:t[1]||(t[1]=n=>a.validateField("name")),"data-cy":"invite-name"},null,544),[[$,o.name.value]]),o.name.error?(c(),m("div",{key:0,class:"form-text text-danger",textContent:d(o.name.error)},null,8,ie)):V("",!0)]),e("div",le,[re,y(e("input",{type:"email",placeholder:"ex: myworkmail@gmail.com",class:"input-text","onUpdate:modelValue":t[2]||(t[2]=n=>o.email.value=n),onKeyup:t[3]||(t[3]=n=>a.validateField("email")),"data-cy":"invite-email"},null,544),[[$,o.email.value]]),o.email.error?(c(),m("div",{key:0,class:"form-text text-danger",textContent:d(o.email.error)},null,8,de)):V("",!0)]),e("div",ce,[me,y(e("select",{class:"input-text","aria-label":"Default select example","onUpdate:modelValue":t[4]||(t[4]=n=>o.role_id.value=n)},he,512),[[U,o.role_id.value]])])]),e("div",be,[pe,e("div",ye,[e("button",{class:"primary-1 button-1 button-color",id:"inviteBtn","data-cy":"invite-send-btn",onClick:t[5]||(t[5]=(...n)=>a.handleSubmit&&a.handleSubmit(...n))}," Send Invitation ")])])])])])])],64)}const A=x(H,[["render",fe]]);const ge={data(){return{modalInvoker:{text:"",method:null}}},props:{name:{type:String,required:!0},email:{type:String,required:!0},contact:{type:String},id:{type:Number,required:!0}},emits:["deleteInvite"],methods:{bodyData(){return{id:this.id,name:this.name,email:this.email}},async reInviteMember(){const s=v();try{const t=await Y(this.bodyData());s.success(`reinvited ${this.name} successfully`)}catch{s.error("Something went wrong")}},async revokeMember(){const s=v();try{const t=await Z(this.bodyData());s.success(`revoked ${this.name} successfully`)}catch{s.error("Something went wrong")}},async deleteMember(){const s=v();try{const t=await axios.delete(`https://6319958e8e51a64d2be7568b.mockapi.io/invitedUsers/${this.id}`);this.$emit("deleteInvite"),s.success(`deleted ${this.name} successfully`)}catch{s.error("Something went wrong")}},setInvoker(s){s.target.id==="revoke"&&(this.modalInvoker.text="revoke",this.modalInvoker.method=this.revokeMember),s.target.id==="delete"&&(this.modalInvoker.text="delete",this.modalInvoker.method=this.deleteMember)}}},_=s=>(N("data-v-67cd8268"),s=s(),T(),s),Ie={class:"btn-group dropstart"},xe=_(()=>e("button",{class:"btn three-dot-btn d-flex justify-content-center align-items-center","data-cy":"invitation-action-toggle-btn","data-bs-toggle":"dropdown"},[e("i",{class:"bi bi-three-dots-vertical",style:{color:"#FA6731","font-size":"1.5rem"}})],-1)),we={class:"dropdown-menu"},ke=_(()=>e("i",{class:"bi bi-send me-4",style:{color:"#CED4DA"}},null,-1)),Se=u("Resend Invitation "),$e=[ke,Se],Ve=["data-bs-target"],Ae=_(()=>e("i",{class:"bi bi-dash-square-fill me-4",style:{color:"#FA6731"}},null,-1)),Ee=u("Revoke Member "),Ce=[Ae,Ee],Ne=["data-bs-target"],Te=_(()=>e("i",{class:"bi bi-trash3-fill me-4",style:{color:"#FA6731"}},null,-1)),Le=u("Delete Entry "),Ue=[Te,Le],Re=["id"],De={class:"modal-dialog modal-dialog-centered",role:"document"},Me={class:"modal-content"},Be=_(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title m-auto ps-5",id:"exampleModalLongTitle"},"Are you sure?"),e("button",{type:"button",class:"btn close conformation-box-close-btn second-button-color","data-bs-dismiss":"modal","data-cy":"conformation-box-close-btn","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")])],-1)),Fe={class:"modal-body d-flex justify-content-center"},je={class:"w-75 text-center"},ze={class:"modal-footer d-flex justify-content-center"},qe=_(()=>e("button",{type:"button",class:"btn conformation-box-no-btn second-button-color","data-cy":"conformation-box-no-btn","data-bs-dismiss":"modal"},"No",-1));function Oe(s,t,l,k,o,a){return c(),m(w,null,[e("div",Ie,[xe,e("div",we,[e("li",null,[e("a",{class:"dropdown-item",href:"#","data-cy":"resend-invitation-link",onClick:t[0]||(t[0]=r=>a.reInviteMember({name:l.name,email:l.email}))},$e)]),e("li",null,[e("a",{class:"dropdown-item text-danger",href:"#","data-cy":"revoke-invitation-link","data-bs-toggle":"modal","data-bs-target":"#_"+l.id.toString(),id:"revoke",onClick:t[1]||(t[1]=r=>a.setInvoker(r))},Ce,8,Ve)]),e("li",null,[e("a",{class:"dropdown-item text-danger",href:"#","data-cy":"delete-invitation-link","data-bs-toggle":"modal","data-bs-target":"#_"+l.id.toString(),id:"delete",onClick:t[2]||(t[2]=r=>a.setInvoker(r))},Ue,8,Ne)])])]),e("div",{class:"modal fade",id:"_"+l.id.toString(),tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},[e("div",De,[e("div",Me,[Be,e("div",Fe,[e("p",je,[u("Do you want to "+d(o.modalInvoker.text)+" the invitation of ",1),e("b",null,d(l.name),1),u(" ? Once "+d(`${o.modalInvoker.text}d`)+" it cannot be undone.",1)])]),e("div",ze,[qe,e("button",{type:"button",class:"btn conformation-box-yes-btn text-white button-color","data-cy":"conformation-box-yes-btn",onClick:t[3]||(t[3]=(...r)=>o.modalInvoker.method&&o.modalInvoker.method(...r)),"data-bs-dismiss":"modal"},"Yes")])])])],8,Re)],64)}const E=x(ge,[["render",Oe],["__scopeId","data-v-67cd8268"]]);const Ke={components:[A,E],data(){return{invitations:[]}},components:{InvitationActions:E,InviteUser:A},mounted(){this.getInvitationList()},computed:{styleRole(){return s=>{const t=s.toLowerCase();if(t==="employee")return"role-employee";if(t==="vendor")return"role-vendor"}},styleStatus(){return s=>{const t=s.toLowerCase();if(t==="pending")return"status-pending";if(t==="expired")return"status-expired"}},styleDotIcon(){return s=>{const t=s.toLowerCase();if(t==="pending")return"status-pending-icon";if(t==="expired")return"status-expired-icon"}}},methods:{async getInvitationList(){const s=v();try{window.emitter.emit("changeSpinnerActiveStatus",!0);const t=await G();this.invitations=t.data.data.invited_users,window.emitter.emit("changeSpinnerActiveStatus",!1)}catch{window.emitter.emit("changeSpinnerActiveStatus",!1),s.error("Something went wrong")}},refreshInvitationList(){this.getInvitationList()}}},Pe=s=>(N("data-v-40a2a392"),s=s(),T(),s),Ye={class:"invitation-container p-4 mt-4 mx-4"},Ze={class:"row px-3"},Ge=C('<div class="col-4" data-v-40a2a392><form class="form-inline d-flex" data-v-40a2a392><input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-cy="invitations-search-field" data-v-40a2a392><button class="btn my-2 px-3 my-sm-0 mx-2 button-color" type="submit" data-cy="invitation-search-btn" data-v-40a2a392><i class="bi bi-search" data-v-40a2a392></i></button></form></div>',1),He={class:"col-8 d-flex justify-content-end"},Je={class:"row mt-4 px-4"},Qe={class:"table table-borderless border table-hover bg-white regular-font"},We=Pe(()=>e("thead",{class:"thead-light"},[e("tr",{class:"text-center"},[e("th",{scope:"col"},"S.N"),e("th",{scope:"col"},"Member Full Name"),e("th",{scope:"col"},"Email Address"),e("th",{scope:"col"},"Role"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action")])],-1)),Xe={class:"text-center"},et={scope:"row"},tt={class:"d-flex justify-content-center align-items-end py-4"};function st(s,t,l,k,o,a){const r=g("InviteUser"),n=g("InvitationActions");return c(),m("div",Ye,[e("div",Ze,[Ge,e("div",He,[I(r)])]),e("div",Je,[e("table",Qe,[We,(c(!0),m(w,null,R(o.invitations,(i,S)=>(c(),m("tbody",{key:S},[e("tr",Xe,[e("th",et,d(S+1),1),e("td",null,d(i.name),1),e("td",null,d(i.email),1),e("td",{class:f(`role ${a.styleRole(i.role.name)}`)},d(i.role.name),3),e("td",tt,[e("div",{class:f(`status ${a.styleStatus(i.status)}`)},[e("div",{class:f(["status-icon me-2",` ${a.styleDotIcon(i.status)}`])},null,2),u(" "+d(i.status),1)],2)]),e("td",null,[I(n,{name:i.name,email:i.email,contact:i.contact,id:i.id,onDeleteInvite:a.refreshInvitationList},null,8,["name","email","contact","id","onDeleteInvite"])])])]))),128))])])])}const lt=x(Ke,[["render",st],["__scopeId","data-v-40a2a392"]]);export{lt as default};
