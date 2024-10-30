import { createApp, onMounted } from 'vue'
import { Nutshell } from '@uxda/nutshell/taro'

import '@uxda/appkit/appkit.css'
import '@uxda/icons/sprite.css'
import './app.scss'
import { useHead } from 'unhead'

const App = createApp({
  onShow() {
  },
  onHide() {},
  setup () {
    onMounted(() => {
      console.log('===play on mounted')
      useHead({
        link: [
          {
            rel: 'stylesheet',
            href: 'https://simple.shensi.tech/system-assets/gradients/web.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://simple.shensi.tech/system-assets/gradients/built-in.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://simple.shensi.tech/system-assets/motions/motions.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://simple.shensi.tech/system-assets/patterns/patterns.css'
          }
        ]
      })
    })
  }
})


const nutshell = Nutshell()
App.use(nutshell)

export default App
