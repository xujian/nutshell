import { computed, h, ref, SetupContext } from 'vue'
import { DialogProps } from '../../../../components'

export const Dialog = (props: DialogProps, { slots }: Omit<SetupContext, 'expose'>) => {

  const open = computed({
    get: () => props.modelValue,
    set: () => {
      props['onUpdate:modelValue']?.(false)
    }
  })

  const scrollView = (content: any) => {
    return h('scroll-view', {
      class: [
        'full-height'
      ]
    }, {
      default: content
    })
  }

  return h(NutPopup, {
    popClass: [
      ...props.modelValue ? ['open'] : []
    ].join(' '),
    style: {
      ...props.width ? {'--width': props.width} : {},
      ...props.height ? {'--height': props.height} : {}
    },
    position: 'center',
    visible: open.value,
    title: props.title,
    height: '60vh',
    width: '80vw',
    closeable: props.closable === false ? false : true,
    destroyOnClose: props.destroyOnClose,
    overlay: props.hasBackdrop === false ? false : true,
    closeOnClickOverlay: true,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, {
    default: () => scrollView(slots.default)
  })
}
