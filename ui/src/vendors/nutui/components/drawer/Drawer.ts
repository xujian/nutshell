import { computed, h, ref, SetupContext } from 'vue'
// import { Popup as NutPopup } from '@nutui/nutui-taro'
import { DrawerProps } from '../../../../components'

export const Drawer = (props: DrawerProps, { slots }: Omit<SetupContext, 'expose'>) => {

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
      'ns-drawer',
      ...props.modelValue ? ['open'] : []
    ].join(' '),
    style: {
      ...props.width ? {'--width': props.width} : {}
    },
    position: 'right',
    visible: open.value,
    title: props.title,
    closable: true,
    width: props.width,
    destroyOnClose: props.destroyOnClose,
    overlay: props.hasBackgrop === false ? false : true,
    closeOnClickOverlay: true,
    round: true,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, scrollView(slots.default))
}
