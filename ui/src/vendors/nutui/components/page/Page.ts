import { Component, defineComponent, h, onMounted, onUnmounted, provide, reactive, ref, SetupContext, shallowRef } from 'vue'
import { pageProps, pageEmits, NsDrawer, NsSheet, NsDialog, PageSymbol, PageConfig } from '../../../../components'
import { useBus, useSafeArea } from '../../../../composables'
import type { DialogOptions, PopupChildComponent, SheetOptions, ToastOptions, NoticeType } from '../../../../services'

export type Notice = {
  options?: {
    type?: NoticeType,
    duration?: number,
  }
  message: string
}

export const Page = defineComponent({
  name: 'NutuiPage',
  props: pageProps,
  emit: pageEmits,
  setup: (props, {slots, emit}) => {


    const pageConfig = reactive<PageConfig>({
      contentScrollable: false,
      hasHeader: false,
    })

    provide(PageSymbol, pageConfig)

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
    const sheetComponent = shallowRef<PopupChildComponent | null>(null),
      sheetProps = shallowRef<any>(),
      sheetOpen = ref(false),
      sheetOptions = shallowRef<any>({})
    const dialogComponent = shallowRef<PopupChildComponent | null>(null),
      dialogProps = shallowRef<any>(),
      dialogOpen = ref(false),
      dialogOptions = shallowRef<any>({})

    const showToast = ({message, options}: {message: string, options: ToastOptions}) => {
      wx.showToast({
        title: message,
        duration: options.duration || 2000,
        icon: options.type || 'none'
      })
    }

    const showNotice = (payload: Notice) => {
      noticeData.value = {
        message: payload.message,
        options: payload.options
      }
      setTimeout(() => {
        noticeData.value = void 0
      }, payload?.options?.duration ?? noticeDuration)
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

    const openSheet = ({component, props, ...options}: SheetOptions) => {
      console.log('===openSheet', component)
      sheetComponent.value = component!
      sheetProps.value = props
      sheetOpen.value = true
      sheetOptions.value = options
      $bus.emit('sheet.open')
    }

    const onSheetComplete = (result: any) => {
      if (result !== false) {
        sheetOptions.value.onComplete?.(result)
        sheetOpen.value = false
        $bus.emit('sheet.close')
      }
    },
    onSheetCalcel = () => {
      sheetOpen.value = false
      $bus.emit('sheet.close')
    }

    const openDialog = ({component, props, ...options}: DialogOptions) => {
      console.log('===open dialog 3', component, props)
      dialogComponent.value = component!
      dialogProps.value = props,
      dialogOpen.value = true
      dialogOptions.value = options
      $bus.emit('dialog.open')
    }

    const onDialogComplete = (result: any) => {
        if (result !== false) {
          dialogOptions.value.onComplete?.(result)
          dialogOpen.value = false
          $bus.emit('dialog.close')
          $bus.emit('dialog.close')
        }
      },
      onDialogCalcel = () => {
        dialogOpen.value = false
      }

    const onScroll = (e: any) => {
      // console.log('===ONSCROLL===', e)
      scroll.value = e.y
    }

    usePageScroll(payload => {
      scroll.value = payload.scrollTop
    })

    useDidShow(() => {
      console.log('===useDidShow')
      page.value?.setAttribute('data-theme', 'present')
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
      dialogOpen.value
        = drawerOpen.value
        = sheetOpen.value
        = false
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
          ...pageConfig.hasHeader ? ['has-header'] : [],
          ...pageConfig.contentScrollable ? ['content-scrollable'] : [],
          'theme-present'
        ],
        style: {
          '--status': `${safeArea.status}px`,
          '--nav': `${safeArea.nav}px`,
          '--bottom': `${safeArea.bottom}px`,
          '--scroll': `${scroll.value}px`,
        },
      }, [
        slots.default?.(),
        h('div', {
            class: [
              'page-notice',
              noticeData.value?.message ? [''] : ['hidden'],
              `${noticeData.value?.options?.type || ''}`
            ],
          }, noticeData.value?.message),
        renderDrawer(),
        // sheetOpen.value ? renderSheet() : null,
        h(NsSheet, {
          class: [
            'app-sheet',
          ],
          modelValue: sheetOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            if (value !== sheetOpen.value) {
              sheetOpen.value = value
            }
            if (value === false) {
              $bus.emit('sheet.close')
            }
          },
          onComplete: onSheetComplete,
          onCancel: onSheetCalcel,
        }, {
          default: () => sheetComponent.value
            ? h(sheetComponent.value, {
              ...sheetProps.value,
              onComplete: onSheetComplete,
              onCancel: onSheetCalcel
            })
            : null
        }),
        // renderDialog(),
        h(NsDialog, {
          class: [
            'app-dialog',
          ],
          modelValue: dialogOpen.value,
          'onUpdate:modelValue': (value: boolean) => {
            if (value !== dialogOpen.value) {
              dialogOpen.value = value
            }
            if (value === false) {
              dialogComponent.value = null
              $bus.emit('dialog.close')
            }
          },
          onComplete: onDialogComplete,
          onCancel: onDialogCalcel,
        }, {
          default: () => dialogComponent.value
            ? h(dialogComponent.value, {
              ...dialogProps.value,
              onComplete: onDialogComplete,
              onCancel: onDialogCalcel,
            })
            : null
        })
      ])
  }
})
