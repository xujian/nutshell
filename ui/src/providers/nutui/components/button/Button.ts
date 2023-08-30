import { h } from 'vue'
import type { ButtonEmits, ButtonProps } from '../../../../components'
import { Size } from '../../../../props/size'
import { ButtonSize } from '@nutui/nutui-taro/dist/types/__VUE/button/type'
import { BRANDS, BrandColor } from '../../../../composables/theme'

const sizeMapping: Record<Size, ButtonSize> = {
  auto: 'normal',
  xs: 'mini',
  sm: 'small',
  md: 'normal',
  lg: 'large',
  xl: 'large'
}

const getSize = (size: Size): ButtonSize => {
  if (!size) return 'normal'
  return sizeMapping[size]
}

export const Button = (props: ButtonProps & ButtonEmits) => {
  const { color } = props
  const colorIsBrand = BRANDS.includes(color as BrandColor)
  const classes = [
    'ns-button',
    colorIsBrand ? `bg-${color}` : ''
  ].join(' ')
  const { type, label, width, disabled,
    maxWidth, height, maxHeight, minWidth, minHeight,
    ...p } = props

  return h(NutButton, {
    class: classes,
    disabled,
    ...!colorIsBrand && {color},
    size: getSize(props.size),
    onClick: props.onClick
  }, {
    default: () => props.label
  })
}