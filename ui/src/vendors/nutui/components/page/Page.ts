import { computed, defineComponent, h, onUnmounted, ref, shallowRef } from 'vue'
import { useToast } from 'vue-toastification'
import { pageProps, pageEmits, NsDrawer, NsSheet, NsDialog } from '../../../../components'
import { useBus, useSafeArea, usePlatform } from '../../../../composables'
import type { DialogOptions, PopupChildComponent, SheetOptions, ToastOptions, NoticeType, DrawerOptions } from '../../../../services'
import { marginProps } from '../../../../utils'

export type Notice = {
  options?: {
    type?: NoticeType,
    duration?: number,
  }
  message: string
}

export const Page = defineComponent({
  name: 'NutuiPage',
  props: {
    ...pageProps,
    ...marginProps
  },
  emits: pageEmits,
  setup: (props, {slots, emit}) => {

    const platform = usePlatform(),
      $toast = useToast()

    // 内置 notice-bar, app-drawer, app-sheet
    const page = ref<HTMLElement>()
    const $bus = useBus()
    const scroll = ref(0)
    const safeArea = useSafeArea()
    const noticeDuration = 5000
    const noticeData = ref<Notice>()
    const drawerComponent = shallowRef<PopupChildComponent | null>(null),
      drawerProps = ref({}),
      drawerOpen = ref(false),
      drawerOptions = shallowRef<any>({})
    const sheetComponent = shallowRef<PopupChildComponent | null>(null),
      sheetProps = shallowRef<any>(),
      sheetOpen = ref(false),
      sheetOptions = shallowRef<any>({})
    const dialogComponent = shallowRef<PopupChildComponent | null>(null),
      dialogProps = shallowRef<any>(),
      dialogOpen = ref(false),
      dialogOptions = shallowRef<any>({})

    const showToast = ({message, options}: {message: string, options: ToastOptions}) => {
      if (platform?.weixin) {
        Taro.showToast({
          title: message,
          duration: options.duration || 2000,
          icon: options.type || 'none'
        })
      } else {
        $toast.info(message)
      }
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
            // 'app-drawer',
            ...drawerOptions.value.round ? ['round'] : [],
          ],
          modelValue: drawerOpen.value,
          round: drawerOptions.value.round,
          width: drawerOptions.value.width,
          'onUpdate:modelValue': (value: boolean) => {
            drawerOpen.value = value
            if (value === false) {
              drawerComponent.value = null
              $bus.emit('drawer.close')
            }
          }
        }, {
          default: () => drawerComponent.value
            ? h(drawerComponent.value, {
                ...drawerProps.value,
                ...drawerOptions.value,
                onClose: () => {
                  drawerOpen.value = false
                }
              })
            : null
        })
    }

    const openDrawer = ({component, props, ...options}: DrawerOptions) => {
      // console.log('===Page openDrawer', props)
      drawerComponent.value = component!
      drawerOptions.value = options
      drawerProps.value = props
      drawerOpen.value = true
      $bus.emit('drawer.open')
    }

    const renderSheet = () => h(NsSheet, {
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
      ...sheetOptions.value
    }, {
      default: () => sheetComponent.value
        ? h(sheetComponent.value, {
          ...sheetProps.value,
          onComplete: onSheetComplete,
          onCancel: onSheetCalcel
        })
        : null
    })

    const openSheet = ({component, props, ...options}: SheetOptions) => {
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

    const renderDialog = () => h(NsDialog, {
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
      ...dialogOptions.value
    }, {
      default: () => dialogComponent.value
        ? h(dialogComponent.value, {
          ...dialogProps.value,
          onComplete: onDialogComplete,
          onCancel: onDialogCalcel,
        })
        : null
    })

    const openDialog = ({component, props, ...options}: DialogOptions) => {
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

    const exit = () => {
      drawerOpen.value = false
    }

    /**
     * 关闭所有对话框
     */
    const cleanup = () => {
      // console.log('===///cleanup===', props.minimal)
      if (props.minimal) {
        return
      }
      $bus.off('toast', showToast)
      $bus.off('notice', showNotice)
      $bus.off('drawer', openDrawer)
      $bus.off('sheet', openSheet)
      $bus.off('dialog', openDialog)
      $bus.off('scroll', onScroll)
      dialogOpen.value = false
      sheetOpen.value = false
    }

    useDidShow(() => {
      // console.log('===///useDidShow', props.minimal)
      page.value?.setAttribute('data-theme', 'present')
      if (props.minimal) {
        return
      }
      $bus.on('toast', showToast)
      $bus.on('notice', showNotice)
      $bus.on('drawer', openDrawer)
      $bus.on('sheet', openSheet)
      $bus.on('dialog', openDialog)
      $bus.on('scroll', onScroll)
    })

    onUnmounted(() => {
      exit()
    })

    useDidHide(() => {
      // 页面返回不触发
      // console.log('===///useDidHide')
      cleanup()
    })

    useLoad(() => {
      // console.log('===///useLoad===')
    })

    useUnload(() => {
      // /.log('===///useUnload===')
      cleanup()
    })

    const classes = computed<string[]>(() => [
      'ns-page page column align-stretch',
      ...scroll.value > 0 ? ['scrolled'] : [],
      ...props.scrollable === true ? ['scrollable'] : [],
      // ...props.classes || [],
      'theme-present'
    ])

    return () => h('div', {
        ref: page,
        class: classes.value,
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
        !props.minimal && renderDrawer(),
        !props.minimal && renderSheet(),
        !props.minimal && renderDialog(),
      ])
  }
})
