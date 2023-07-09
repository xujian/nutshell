import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Nutshell from 'nutshell'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Nutshell)
app.use(createPinia())
app.use(router)

app.mount('#app')
