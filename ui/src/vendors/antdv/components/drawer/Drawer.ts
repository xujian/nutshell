import { h, SetupContext } from 'vue'
import { Drawer as AntdvDrawer, DrawerProps as AntdvDrawerProps } from 'ant-design-vue'
import { DrawerProps } from '../../../../components'

export const Drawer = (props: DrawerProps, ctx: SetupContext) => {

  const styles = {
    ...props.fill
      ? { '--fill': props.fill }
      : {}
  }

  return h(AntdvDrawer, {
    rootClassName: [
      props.className,
    ].join(' '),
    open: props.modelValue,
    title: props.title,
    closable: false,
    width: props.width,
    style: styles,
    destroyOnClose: props.destroyOnClose,
    placement: 'right',
    mask: props.mask === false ? false : true,
    maskClosable: true,
    'onUpdate:open': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    }
  }, ctx.slots)
}

