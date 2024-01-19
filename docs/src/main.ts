import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Nutshell } from '@uxda/nutshell'
import plugins from './plugins'
import '@uxda/nutshell/nutui.css'
import '@uxda/nutshell/antdv.css'
import '@uxda/nutshell/nutshell.css'
import '@uxda/icons/icons.css'
import './styles/main.scss'

const app = createApp(App)

const nutshell = Nutshell({
  vendor: 'antdv',
  theme: 'present'
})
app.use(nutshell)
plugins.forEach(plugin => app.use(plugin))

app.use(createPinia())
app.use(router)

app.mount('#app')
