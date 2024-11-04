import { computed, defineComponent, h, onUnmounted, ref } from 'vue'
import { pageProps, pageEmits } from '../../../../components'
import { marginProps } from '../../../../utils'

export const Page = defineComponent({
  name: 'AntdvPage',
  props: {
    ...pageProps,
    ...marginProps
  },
  emits: pageEmits,
  setup: (props, {slots, emit}) => {

    const page = ref<HTMLElement>()
    const scroll = ref(0)

    onUnmounted(() => {
    })

    const classes = computed<string[]>(() => [
      'ns-page desktop page column align-stretch',
      ...scroll.value > 0 ? ['scrolled'] : [],
      ...props.scrollable === false ? [] : ['scrollable'],
      // ...props.classes || [],
      'theme-present'
    ])

    return () => h('div', {
        ref: page,
        class: classes.value,
        style: {
          '--scroll': `${scroll.value}px`,
        },
      }, slots
    )
  }
})
