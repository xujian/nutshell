import { computed, SetupContext, h } from 'vue'
import { DialogProps } from '../../../../components'

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

  const scrollView = (content: any) => {
    return h('scroll-view', {
      class: [
        'full-height'
      ]
    }, content())
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
    overlay: props.mask === false ? false : true,
    closeOnClickOverlay: true,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, {
    default: () => scrollView(content)
  })
}
