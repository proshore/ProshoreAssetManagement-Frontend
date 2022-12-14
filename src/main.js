import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Toast,{ POSITION }  from "vue-toastification"
import "vue-toastification/dist/index.css";
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import Emitter from 'tiny-emitter'
import SpinnerComponent from "@/components/SpinnerComponent.vue"
const options = {
   position:POSITION.BOTTOM_RIGHT,
   timeout: 2000,
};


const app = createApp(App);

app.component('spinner-component',SpinnerComponent)
window.emitter = new Emitter()
app.use(router);
app.use(Toast, options);
app.mount('#app');

