import{_ as i,o as a,c as o,a as l,t as d,h as u}from"./index.a5eff91b.js";const s={props:{name:{type:String,required:!0},type:{type:String,required:!0},label:{type:String},id:{type:String,required:!0},placeholder:{type:String,required:!0},error:{type:String,required:!0},modelValue:{type:String,required:!0}},methods:{}},m={class:"mb-4"},c=["for"],y=["type","id","name","placeholder","value"],p=["textContent"];function f(r,t,e,g,_,h){return a(),o("div",m,[l("label",{for:e.name,class:"form-label"},d(e.label),9,c),l("input",{type:e.type,class:"form-control",id:e.id,name:e.name,placeholder:e.placeholder,value:e.modelValue,onKeyup:t[0]||(t[0]=n=>r.$emit("field-changed")),onInput:t[1]||(t[1]=n=>r.$emit("update:modelValue",n.target.value)),"data-cy":"{{name}}"},null,40,y),e.error?(a(),o("div",{key:0,class:"form-text text-danger",textContent:d(e.error)},null,8,p)):u("",!0)])}const q=i(s,[["render",f]]);export{q as B};
