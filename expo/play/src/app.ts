import { createApp, onMounted, provide, reactive } from 'vue'
import { useRouter } from '@tarojs/taro'
import { Nutshell, AppSymbol} from '@uxda/nutshell/taro'
import type { AppSettings } from '@uxda/nutshell/taro'
import { useHead } from 'unhead'

import '@uxda/appkit/appkit.css'
// import '@uxda/icons/sprite.css'
import '@nutui/nutui-taro/dist/style.css'
import './app.scss'

const App = createApp({
  onShow() {
  },
  onHide() {},
  setup () {
    const settings = reactive<AppSettings>({})
    const router = useRouter()
    if (router?.params?.mock) {
      settings.mock = router.params.mock
    }
    provide(AppSymbol, settings)

    onMounted(() => {
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
            href: 'https://simple.shensi.tech/system-assets/gradients/mesh.css'
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
