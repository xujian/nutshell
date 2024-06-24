import { defineComponent, h, onMounted, onUnmounted, ref, SetupContext } from 'vue'
import { pageProps, pageEmits, NsDrawer, NsSheet, type PageProps } from '../../../../components'
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

    // 内置 notice-bar, app-drawer, app-sheet

    const $bus = useBus()
    const safeArea = useSafeArea()
    const noticeDuration = 5000
    const noticeData = ref<Notice>()
    const drawerData = ref()
    const drawerOpen = ref(false)
    const sheetData = ref()
    const sheetOpen = ref(false)

    const renderNotice = () => {
      return noticeData.value
        ? h('div', {
            class: [
              'page-notice',
              `${noticeData.value?.type || ''}`
            ],
          }, noticeData.value.content)
        : null
    }

    const showNotice = (payload: Notice) => {
      noticeData.value = payload
      setTimeout(() => {
        noticeData.value = void 0
      }, noticeDuration)
    }

    const renderDrawer = () => {
      return h(NsDrawer, {
          class: [
            'app-drawer',
          ],
          modelValue: drawerOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            drawerOpen.value = value
          }
        }, {
          default: () => h(drawerData.value)
        })
    }

    const openDrawer = () => {
      drawerOpen.value = true
    }

    const renderSheet = () => {
      return h(NsSheet, {
          class: [
            'app-sheet',
          ],
          modelValue: sheetOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            sheetOpen.value = value
          }
        }, {
          default: () => h(sheetData.value?.component || null, sheetData.value?.props)
        })
    }

    const openSheet = () => {
      sheetOpen.value = true
    }

    onMounted(() => {
      $bus.on('notice', showNotice)
      $bus.on('drawer', openDrawer)
      $bus.on('sheet', openSheet)
    })

    onUnmounted(() => {
      $bus.off('notice', showNotice)
      $bus.off('drawer', openDrawer)
      $bus.off('sheet', openSheet)
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
        renderDrawer(),
        slots.default?.(),
        renderSheet(),
      ])
  }
})
