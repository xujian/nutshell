import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Nutshell } from 'nutshell'

import App from './App.vue'
import router from './router'
import './styles/main.scss'

const app = createApp(App)
const nutshell = Nutshell({
  // provider: 'antdv'
})
app.use(nutshell)

app.use(createPinia())
app.use(router)

app.mount('#app')
