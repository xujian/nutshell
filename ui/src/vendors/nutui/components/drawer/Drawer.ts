import { computed, h, ref, SetupContext } from 'vue'
// import { Popup as NutPopup } from '@nutui/nutui-taro'
import { DrawerProps } from '../../../../components'
// import { ScrollView } from '@tarojs/components'

export const Drawer = (props: DrawerProps, { slots }: Omit<SetupContext, 'expose'>) => {

  const open = computed({
    get: () => props.modelValue,
    set: () => {
      props['onUpdate:modelValue']?.(false)
    }
  })

  const scrollView = (content: any) => {
    return h('scroll-view', {
      'scroll-y': true,
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
      ...props.width ? {'--width': props.width} : {}
    },
    position: 'right',
    visible: open.value,
    title: props.title,
    closable: true,
    width: props.width,
    destroyOnClose: props.destroyOnClose,
    overlay: props.mask === false ? false : true,
    closeOnClickOverlay: true,
    round: props.round,
    'onUpdate:visible': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
  }, {
    default: () => scrollView(slots.default)
  })
}
