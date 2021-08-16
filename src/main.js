import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import css files
import './assets/css/reset.css'
import './assets/css/index.css'


createApp(App).use(router).use(store).mount('#app')
