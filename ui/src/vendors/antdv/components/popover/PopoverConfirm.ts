import { h, SetupContext } from 'vue'
import { Popconfirm as AntdvPopconfirm } from 'ant-design-vue'
import { PopoverConfirmProps } from '../../../../components'
import { BRANDS, BrandColor } from '../../../../composables/theme'

export const PopoverConfirm = (props: PopoverConfirmProps, cxt: SetupContext) => {
  const { color } = props
  const colorIsBrand = BRANDS.includes(color as BrandColor)
  const classes = [
    'ns-popover-confirm', props.overlayClassName,
    colorIsBrand ? `color-${color}` : ''
  ]

  return h(
    AntdvPopconfirm,
    {
      'overlay-class-name': classes,
      description: props.content,
      title: props.title,
      placement: props.position || 'top',
      open: props.modelValue,
      'onUpdate:open': (value: boolean) => {
        props['onUpdate:modelValue']?.(value)
      },
      cancelText: '取消',
      okText: '确定',
    },
    cxt.slots
  )
}
// + import => ./index.ts, ../components.ts
