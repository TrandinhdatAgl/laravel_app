import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'


axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};
axios.defaults.baseURL = 'http://127.0.0.1:8000';

const app = createApp({
    extends: App, 
    // beforeCreate() { 
    //     this.$store.commit('auth/initializedAuth'); 
    // }  
})
app.use(router)
app.use(store)
app.mount('#app')
