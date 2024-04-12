import { h, SetupContext } from 'vue'
import { Drawer as AntdvDrawer, DrawerProps as AntdvDrawerProps } from 'ant-design-vue'
import { DrawerProps } from '../../../../components'

export const Drawer = (props: DrawerProps, ctx: SetupContext) => {

  return h(AntdvDrawer, {
    rootClassName: [
      'ns-drawer',
      props.className
    ].join(' '),
    open: props.modelValue,
    title: props.title,
    closable: false,
    width: props.width,
    placement: props.anchor as AntdvDrawerProps['placement'],
    mask: props.hasBackgrop === false ? false : true,
    maskClosable: true,
    'onUpdate:open': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    }
  }, ctx.slots)
}

