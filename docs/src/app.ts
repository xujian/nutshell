import { createApp } from 'vue'
import { Nutshell } from 'nutshell'
import '@/styles/app.scss'

import router from './router'

const nutshell = Nutshell()

const app = createApp({})

app
  .use(router)
  .use(nutshell)

export default app
