import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '../src/Router/router';
import store from '../src/store/index';


const app = createApp(App);

app.use(router);
app.use(store);  

app.mount('#app'); 
