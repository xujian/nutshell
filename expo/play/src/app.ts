import { createApp } from 'vue'
import { Nutshell } from '@uxda/nutshell/taro'
import '@uxda/nutshell/nutui.css'
import '@uxda/nutshell/nutshell.css'
import '@uxda/appkit/appkit.css'
import '@uxda/icons/sprite.css'
import './app.scss'

const App = createApp({
  onShow() {},
  onHide() {}
})


const nutshell = Nutshell()
App.use(nutshell)

export default App
