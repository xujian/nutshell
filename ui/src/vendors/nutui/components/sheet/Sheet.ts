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

  return h(NutPopup, {
    popClass: [
      'ns-sheet',
      ...props.modelValue ? ['open'] : []
    ].join(' '),
    style: {
      ...props.height ? {'--height': props.height} : {}
    },
    position: 'bottom',
    visible: open.value,
    title: props.title,
    closable: true,
    height: props.height || '50vh',
    destroyOnClose: props.destroyOnClose,
    overlay: props.hasBackgrop === false ? false : true,
    closeOnClickOverlay: false,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, scrollView(slots.default))
}
