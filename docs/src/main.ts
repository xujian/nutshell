import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from 'unhead'

import App from './App.vue'
import router from './router'
import { Nutshell } from '@uxda/nutshell'
import plugins from './plugins'
import '@nutui/nutui/dist/style.css';
import '@uxda/icons/font.css'
import './styles/main.scss'

const head = createHead()
const app = createApp(App)

const nutshell = Nutshell({
  vendor: 'antdv',
  theme: 'present',
  icon: 'sprite'
})
app.use(nutshell)
plugins.forEach(plugin => app.use(plugin))

app.use(createPinia())
app.use(router)

app.mount('#app')
