import { computed, h, ref, SetupContext } from 'vue'
import { SheetProps } from '../../../../components'

export const Sheet = (props: SheetProps, { slots }: Omit<SetupContext, 'expose'>) => {

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

  const height = props.height
    ? typeof props.height === 'number'
      ? `${props.height}px`
      : props.height
    : '50vh'

  return h(NutPopup, {
    popClass: [
      ...props.modelValue ? ['open'] : []
    ].join(' '),
    style: {
      ...props.height ? {'--height': props.height} : {}
    },
    position: 'bottom',
    visible: open.value,
    title: props.title,
    closable: true,
    height,
    closeable: props.closable === false ? false : true,
    destroyOnClose: props.destroyOnClose,
    overlay: props.mask === false ? false : true,
    closeOnClickOverlay: true,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, {
    default: () => scrollView(slots.default)
  })
}
