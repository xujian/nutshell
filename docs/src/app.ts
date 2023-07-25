import { createApp } from 'vue'
import { Nutshell } from 'nutshell'
import '@/styles/app.scss'
import { ConfigProvider } from '@nutui/nutui-taro'

import router from './router'

const nutshell = Nutshell()

const app = createApp({})

app
  .use(router)
  .use(ConfigProvider)
  .use(nutshell)

export default app
