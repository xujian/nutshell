import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Nutshell } from '@uxda/nutshell/taro'
import '@uxda/nutshell/nutui.css'
import '@uxda/nutshell/nutshell.css'
import AppKit from '@uxda/appkit'
import '@uxda/appkit/appkit.css'
import '@uxda/icons/sprite.css'
import Taro from '@tarojs/taro'
import './app.scss'

const App = createApp({
  onShow() {},
  onHide() {}
})
App.use(createPinia())


const nutshell = Nutshell()
App.use(nutshell)

const tenant = () => {
  const stored = Taro.getStorageSync('tenantInfo')
  let tenant: any = {}
  try {
    tenant = JSON.parse(stored || '{}')
  } catch (e) {}
  return tenant?.tenantId ?? ''
}
const app = () => {
  const stored = Taro.getStorageSync('ddjf_appInfo')
  let app: any = {}
  try {
    app = JSON.parse(stored || '{}')
  } catch (e) {}
  return app?.appCode ?? ''
}

App.use(AppKit, {
  app,
  tenant,
  token: () => {
    return Taro.getStorageSync('session')
  },
  baseUrl: () => '/',
  401: () => {
    Taro.redirectTo({
      url: '/pages/login/index'
    })
  }
})

export default App
