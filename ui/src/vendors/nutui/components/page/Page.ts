import { Component, defineComponent, h, onMounted, onUnmounted, ref, SetupContext } from 'vue'
import { pageProps, pageEmits, NsDrawer, NsSheet, NsDialog, type PageProps } from '../../../../components'
import { useBus, useSafeArea } from '../../../../composables'
import { DialogOptions } from '../../../../services/dialog'
import { ToastOptions } from '../../../../services/toast'

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
    const page = ref<HTMLElement>()
    const $bus = useBus()
    const scroll = ref(0)
    const safeArea = useSafeArea()
    const noticeDuration = 5000
    const noticeData = ref<Notice>()
    const drawerData = ref(<{component?: Component, props?: any}>({
      component: void 0,
      props: {}
    }))
    const drawerOpen = ref(false)
    const sheetData = ref<{component?: Component, props?: any}>({
      component: void 0,
      props: {}
    })
    const sheetOpen = ref(false)
    const dialogData = ref<DialogOptions>({
      component: void 0,
      props: {}
    })
    const dialogOpen = ref(false)

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

    const showToast = ({message, options}: {message: string, options: ToastOptions}) => {
      wx.showToast({
        title: message,
        duration: options.duration || 2000,
        icon: options.type || 'none'
      })
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
            if (value === false) {
              $bus.emit('drawer.close')
            }
          }
        }, {
          default: () => drawerData.value?.component
            ? h(drawerData.value?.component, drawerData.value?.props)
            : null
        })
    }

    const openDrawer = () => {
      drawerOpen.value = true
      $bus.emit('drawer.open')
    }

    const renderSheet = () => {
      return h(NsSheet, {
          class: [
            'app-sheet',
          ],
          modelValue: sheetOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            sheetOpen.value = value
            if (value === false) {
              $bus.emit('sheet.close')
            }
          }
        }, {
          default: () => sheetData.value?.component
            ? h(sheetData.value?.component, {
                ...sheetData.value?.props,
                onComplete: (result: any) => {
                  if (result !== false) {
                    sheetOpen.value = false
                    sheetData.value?.props?.onComplete?.(result)
                  }
                }
              })
            : null
        })
    }

    const openSheet = ({component, props}: {component: Component, props: any}) => {
      console.log('===openSheet', component)
      sheetData.value.component = component
      sheetData.value.props = props
      sheetOpen.value = true
      $bus.emit('sheet.open')
    }

    const renderDialog = () => {
      return h(NsDialog, {
          class: [
            'app-dialog',
          ],
          modelValue: dialogOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            dialogOpen.value = value
            if (value === false) {
              $bus.emit('dialog.close')
            }
          }
        }, {
          default: () => dialogData.value?.component
            ? h(dialogData.value?.component, dialogData.value?.props)
            : null
        })
    }

    const openDialog = ({component, props}: DialogOptions) => {
      console.log('===options', component)
      dialogData.value.component = component
      dialogData.value.props = {
        ...props,
        onComplete (payload: any) {
          dialogOpen.value = false
          props.onComplete(payload)
        }
      }
      dialogOpen.value = true
      $bus.emit('dialog.open')
    }

    const onScroll = (e: any) => {
      console.log('===ONSCROLL===', e)
      scroll.value = e.y
    }

    usePageScroll(payload => {
      scroll.value = payload.scrollTop
    })

    onMounted(() => {
      console.log('===onMounted')
      page.value?.setAttribute('data-theme', 'present')
    })

    // @ts-ignore
    useDidShow(() => {
      console.log('===useDidShow')
      $bus.on('toast', showToast)
      $bus.on('notice', showNotice)
      $bus.on('drawer', openDrawer)
      $bus.on('sheet', openSheet)
      $bus.on('dialog', openDialog)
      $bus.on('scroll', onScroll)
    })

    useDidHide(() => {
      console.log('===useDidHide')
      $bus.off('toast', showToast)
      $bus.off('notice', showNotice)
      $bus.off('drawer', openDrawer)
      $bus.off('sheet', openSheet)
      $bus.off('dialog', openDialog)
      $bus.off('scroll', onScroll)
    })

    // @ts-ignore
    useLoad(() => {
      console.log('===///useLoad===')
    })

    // @ts-ignore
    useUnload(() => {
      console.log('===///useUnload===')
    })

    return () => h('div', {
        ref: page,
        class: [
          'page column align-stretch',
          ...scroll.value > 0 ? ['scrolled'] : [],
          ...props.scrollable ? ['scrollable'] : [],
          'theme-present'
        ],
        style: {
          '--status': `${safeArea.status}px`,
          '--nav': `${safeArea.nav}px`,
          '--bottom': `${safeArea.bottom}px`,
          '--scroll': `${scroll.value}px`,
        },
        'data-mike': 'ppp'
      }, [
        slots.default?.(),
        renderNotice(),
        renderDrawer(),
        renderSheet(),
        renderDialog(),
      ])
  }
})
