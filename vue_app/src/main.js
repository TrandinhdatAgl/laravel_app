import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'


axios.defaults.withCredentials = true
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
