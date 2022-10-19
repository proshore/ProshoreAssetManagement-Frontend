import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";
import router from './router'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css";

const options = {
    // You can set your default options here
};


const app = createApp(App);
app.use(router);
app.use(Toast, options);
app.mount('#app');

