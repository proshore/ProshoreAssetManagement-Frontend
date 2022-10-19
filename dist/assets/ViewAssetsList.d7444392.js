import{_ as d,s as u,o as c,c as r,a as t,F as p,q as h,t as a,n,d as b,m as _,p as f,j as m}from"./index.f3619b4a.js";const v={components:[],data(){return{assets:[]}},components:{},async created(){try{const e=await u.get("https://6319958e8e51a64d2be7568b.mockapi.io/assetslist");this.assets=e.data}catch{}},computed:{styleCondition(){return e=>{if(e.toLowerCase()==="brand new")return"condition-new";if(e.toLowerCase()==="refurbished")return"condition-refurbished";if(e.toLowerCase()==="used")return"condition-used"}},styleStatus(){return e=>{if(e.toLowerCase()==="available")return"status-available";if(e.toLowerCase()==="requested")return"status-requested";if(e.toLowerCase()==="active")return"status-active"}},styleDotIcon(){return e=>{if(e.toLowerCase()==="available")return"status-available-icon";if(e.toLowerCase()==="requested")return"status-requested-icon";if(e.toLowerCase()==="active")return"status-active-icon"}}}},y=e=>(f("data-v-fa8bea07"),e=e(),m(),e),w={class:"view-assets-container p-4 mt-4 mx-4"},x=_('<div class="row px-3" data-v-fa8bea07><div class="col-4" data-v-fa8bea07><form class="form-inline d-flex" data-v-fa8bea07><input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Search" aria-label="Search" data-cy="assets-search-field" data-v-fa8bea07><button class="btn my-2 px-3 my-sm-0 mx-2 button-color" type="submit" data-cy="assets-search-btn" data-v-fa8bea07><i class="bi bi-search" data-v-fa8bea07></i></button></form></div></div>',1),C={class:"row mt-4 px-4"},L={class:"table w-100 bg-white table-borderless border table-hover regular-font"},S=y(()=>t("thead",{class:"thead-light"},[t("tr",{class:"text-center"},[t("th",{scope:"col"},"S.N"),t("th",{scope:"col"},"Asset"),t("th",{scope:"col"},"Type"),t("th",{scope:"col"},"Stock Quantity"),t("th",{scope:"col"},"Condition"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Bought Date")])],-1)),g={class:"text-center"},k={scope:"row"};function I(e,q,D,V,i,o){return c(),r("div",w,[x,t("div",C,[t("table",L,[S,(c(!0),r(p,null,h(i.assets,(s,l)=>(c(),r("tbody",{key:s.id},[t("tr",g,[t("th",k,a(l+1),1),t("td",null,a(s.name),1),t("td",null,a(s.type),1),t("td",null,a(s.stockQuantity),1),t("td",{class:n(`condition ${o.styleCondition(s.condition)}`)},a(s.condition),3),t("td",null,[t("div",{class:n(`status ${o.styleStatus(s.status)}`)},[t("div",{class:n(["status-icon me-2",` ${o.styleDotIcon(s.status)}`])},null,2),b(" "+a(s.status),1)],2)]),t("td",null,a(s.boughtDate),1)])]))),128))])])])}const N=d(v,[["render",I],["__scopeId","data-v-fa8bea07"]]);export{N as default};
