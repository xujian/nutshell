import { computed, SetupContext, h } from 'vue'
import { DialogProps, NsRow, NsButton, NsCard } from '../../../../components'

export const Dialog = (props: DialogProps, { slots, emit }: Omit<SetupContext, 'expose'>) => {

  const visible = computed({
    get: () => !!props.modelValue,
    set: (v: boolean) => {
      props['onUpdate:modelValue']?.(v)
    }
  })

  const content = () => h(slots.default!, {
    onComplete: (result: any) => {
      console.log('===Dialog.ts content complete', result)
      emit('complete', result)
    },
    onCancel: () => {
      console.log('===Dialog.ts content cancel')
      emit('cancel')
    }
  })

  const footer = () => props.footer
    ? h(NsRow, {
        class: ['dialog-footer'],
        justify: 'center'
      }, {
        default: () => [
        h(NsButton, {
          variant: 'outlined',
          color: props.okColor || '#fff',
          label: props.cancelText || '取消',
          onClick: () => emit('close')
        }),
        h(NsButton, {
          color: props.okColor || 'primary',
          label: props.okText || '确定',
          onClick: () => emit('complete')
        })
      ]})
    : null

  const card = () => h(NsCard, {
      class: ['dialog-card'],
      title: props.title
    }, {
      default: content,
      footer
  })

  const scrollView = (content: any) => {
    return h('scroll-view', {
      class: [
        'full-height'
      ]
    }, card())
  }

  const height = props.height
    ? typeof props.height === 'number'
      ? `${props.height}px`
      : props.height
    : '50vh'

  return h(NutPopup, {
    popClass: [
      ...props.modelValue ? ['open'] : []
    ].join(' '),
    overlayClass: 'dialog-overlay',
    style: {
      ...props.width ? {'--width': props.width} : {},
      ...props.height ? {'--height': props.height} : {}
    },
    position: 'center',
    visible: visible.value,
    title: props.title,
    height,
    width: props.width || '80vw',
    catchMove: true,
    closeable: props.closable === false ? false : true,
    destroyOnClose: props.destroyOnClose,
    closeOnClickOverlay: props.modal === false,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, {
    default: () => scrollView(content)
  })
}
