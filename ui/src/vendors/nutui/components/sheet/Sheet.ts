import { computed, defineComponent, h, provide, reactive } from 'vue'
import { sheetProps } from '../../../../components/sheet'
import { buildDesignClasses, PopupState, PopupStateSymbol } from '../../../../props'
import { NsRow } from '../../../..//components/flex'
import { NsButton } from '../../../..//components/button'

export const Sheet = defineComponent(
  (props, { slots, emit }) => {
    const $bus = useBus()

    // 可关闭状态 使用 provide/inject
    // 使子组件可控制浮窗 允许/不允许 关闭
    // 或者在关闭时执行一些动作
    const state = reactive<PopupState>({
      couldClose: true,
      beforeClose: () => true
    })

    // 用于子组件
    provide(PopupStateSymbol, state)

    const visible = computed({
      get: () => !!props.modelValue,
      set: () => {
        props['onUpdate:modelValue']?.(false)
      }
    })

    const close = () =>
      props.closable
        ? h('div', {
            class: ['ns-icon-close', 'icon'],
            onClick: () => emit('cancel')
          })
        : null

    const title = () =>
      props.title
        ? h('div', {
            class: ['sheet-title', 'row', 'justify-center'],
          }, [
            h('h5', {}, props.title),
            close(),
          ])
        : null

    const content = () => {
      return h('div', {
          class: ['sheet-body']
        }, h('scroll-view', {
          'scroll-y': true,
          class: [
            'sheet-scroll-view',
          ],
        }, h('div', {
              class: ['sheet-scroll-view-content'],
            }, {
              default: slots.default
            })
        )
      )
    }

    const footer = () => props.footer
      ? h(NsRow, {
          class: ['sheet-footer'],
          justify: 'stretch',
          gap: 10,
        }, {
          default: () => [
            props.cancelText === ''
              ? null
              : h(NsButton, {
                  variant: 'outlined',
                  color: props.cancelColor || '#fff',
                  label: props.cancelText || '取消',
                  size: 'lg',
                  onClick: () => {
                    emit('close')
                    emit('cancel')
                  }
                }),
            h(NsButton, {
              color: props.okColor || 'primary',
              label: props.okText || '确定',
              size: 'lg',
              onClick: () => {
                emit('complete')
                emit('ok')
              }
            })
          ]})
      : null

    const height = props.height
      ? typeof props.height === 'number'
        ? `${props.height}px`
        : props.height
      : '50vh'

    return () => h(NutPopup, {
      class: [
        ...props.title ? ['has-title'] : [],
        ...props.footer ? ['has-footer'] : [],
        ...props.modelValue ? ['open'] : []
      ],
      popClass: [
        ...buildDesignClasses(props)
      ].join(' '),
      overlayClass: 'sheet-overlay',
      style: {
        ...props.height ? {'--height': `${props.height || 320}px`} : {}
      },
      position: 'bottom',
      visible: visible.value,
      title: props.title,
      closeable: false,
      height,
      destroyOnClose: props.destroyOnClose === false ? false : true,
      overlay: props.mask === false ? false : true,
      // props.modal: 不允许点击 overlay 直接关闭浮窗
      // 关闭时需要询问子组件状态，确定是否可以关闭
      closeOnClickOverlay: props.modal === true ? false : true,
      round: true,
      'onUpdate:visible': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      },
      onClickOverlay: () => {
        // 当用户设定 :modal="true" 时, 需要处理 onClickOverlay
        if (state.couldClose) {
          visible.value = false
        } else {
          state.couldClose = state.beforeClose()
        }
      },
      onOpen: () => {
        $bus.emit('picker.open')
      },
      onClose: () => {
        $bus.emit('picker.close')
      }
    }, {
        default: () => [
          title(),
          content(),
          footer(),
        ]
      })
  }, {
    name: 'NutuiSheet',
    props: sheetProps
  }
)

