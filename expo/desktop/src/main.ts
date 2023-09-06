import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Nutshell } from 'nutshell'

import App from './App.vue'
import router from './router'
import 'nutshell/nutui.css'
import 'nutshell/antdv.css'
import 'nutshell/nutshell.css'
import './styles/main.scss'

const app = createApp(App)
const nutshell = Nutshell({
  vendor: 'antdv'
})
app.use(nutshell)

app.use(createPinia())
app.use(router)

app.mount('#app')
