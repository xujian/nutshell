import './assets/main.css'

import { createApp } from 'vue'
import { Nutshell } from 'nutshell'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const nutshell = Nutshell()

app.use(nutshell)
app.use(router)

app.mount('#app')
