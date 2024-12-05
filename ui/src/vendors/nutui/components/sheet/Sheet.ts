import { computed, defineComponent, h, provide, reactive, useAttrs } from 'vue'
import { sheetProps } from '../../../../components'
import { PopupState, PopupStateSymbol } from '../../../../props'

export const Sheet = defineComponent(
  (props, { slots, emit }) => {

    const $attrs = useAttrs()

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
      return h('scroll-view', {
        class: [
          'sheet-content',
          'grow',
        ],
      }, {
        default: slots.default
      })
    }

    const height = props.height
      ? typeof props.height === 'number'
        ? `${props.height}px`
        : props.height
      : '50vh'

    return () => h(NutPopup, {
      popClass: [
        $attrs.class,
        ...props.modelValue ? ['open'] : []
      ].join(' '),
      overlayClass: 'sheet-overlay',
      style: {
        ...props.height ? {'--height': props.height} : {}
      },
      position: 'bottom',
      visible: visible.value,
      title: props.title,
      catchMove: true,
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
    }, {
        default: () => [
          title(),
          content()
        ]
      })
  }, {
    name: 'NutuiSheet',
    props: sheetProps
  }
)

