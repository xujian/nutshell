import { defineComponent, h, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from '../../composables'
import { useBus } from '../../composables'

const appProps = {
  theme: {
    type: String,
    default: 'present'
  }
}

/**
 * 应用根组件 <ns-app>
 */
export const NsApp = defineComponent({
  name: 'NsApp',
  props: appProps,
  setup (props, ctx) {
    // What NsApp do:
    // 1. initiates global configs/settings
    // 2. provides system values and state
    // 3. listens to app level events
    const { slots } = ctx
    const classes = [
      'ns-app',
    ].join(' ')

    const { theme, setTheme } = useTheme()
    const body = document.body
    body.setAttribute('data-theme', theme)

    const $bus = useBus()

    const handleThemeChange = (value: string) => {
      setTheme(value)
      body.setAttribute('data-theme', value)
    }

    onMounted(() => {
      $bus.on('theme:change', handleThemeChange)
    })

    onBeforeUnmount(() => {
      $bus.off('theme:change', handleThemeChange)
    })
  
    return () => h('div', {
      class: classes,
    }, slots)
  },
})