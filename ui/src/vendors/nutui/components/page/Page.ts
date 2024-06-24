import { defineComponent, h, onMounted, onUnmounted, ref, SetupContext } from 'vue'
import { pageProps, pageEmits, type PageProps } from '../../../../components'
import { useBus, useSafeArea } from '../../../../composables'

export type NoticeType = 'info' | 'warning' | 'error'

export type Notice = {
  type: NoticeType,
  content: string
}

export const Page = defineComponent({
  name: 'NutuiPage',
  props: pageProps,
  emit: pageEmits,
  setup: (props, {slots, emit}) => {

    const $bus = useBus()
    const notice = ref<Notice>()
    const safeArea = useSafeArea()
    const duration = 5000;

    const renderNotice = () => {
      return notice.value
        ? h('div', {
            class: [
              'page-notice',
              `${notice.value?.type || ''}`
            ],
          }, notice.value.content)
        : null
    }

    const showNotice = (payload: Notice) => {
      console.log('===showNotice', payload)
      notice.value = payload
      setTimeout(() => {
        notice.value = void 0
      }, duration)
    }

    onMounted(() => {
      $bus.on('notice', showNotice)
    })

    onUnmounted(() => {
      $bus.off('notice', showNotice)
    })

    return () => h('div', {
        class: 'page',
        style: {
          '--status': `${safeArea.status}px`,
          '--nav': `${safeArea.nav}px`,
          '--bottom': `${safeArea.bottom}px`,
        }
      }, [
        renderNotice(),
        slots.default?.()
      ])
  }
})
