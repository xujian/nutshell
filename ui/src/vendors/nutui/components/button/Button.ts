import { h } from 'vue'
import type { ButtonEmits, ButtonProps } from '../../../../components'
import { Size } from '../../../../props/size'
import { ButtonSize, ButtonShape } from '@nutui/nutui-taro/dist/types/__VUE/button/type'
import { BRANDS, BrandColor } from '../../../../composables/theme'
import { MarginProps } from '../../../../utils'

const sizeMapping: Record<Size, ButtonSize> = {
  auto: 'normal',
  xs: 'mini',
  sm: 'small',
  md: 'normal',
  lg: 'large',
  xl: 'large'
}

const getSize = (size?: Size): ButtonSize => {
  if (!size) return 'normal'
  return sizeMapping[size]
}

export const Button = (props: ButtonProps) => {
  const { color } = props
  const colorIsBrand = BRANDS.includes(color as BrandColor)
  const classes = [
    'ns-button',
    props.size ? `size-${props.size}` : '',
    ...(props.classes ?? []),
    colorIsBrand ? `color-${color}` : ''
  ]
  const { label, width, disabled,
    maxWidth, height, maxHeight, minWidth, minHeight,
    ...p } = props
  
  const isStaticImage = (url: string) =>
    url.endsWith('.svg')
    || url.endsWith('.png')
    || url.endsWith('.jpg')
    || url.endsWith('.jpeg')

  const icon = props.icon
    ? isStaticImage(props.icon)
      ? () => h('img', {
        src: props.icon,
        class: 'icon',
      })
      : () => null
    : () => null

  return h(NutButton, {
    class: classes,
    disabled,
    shape: 'suqare' as ButtonShape,
    ...!colorIsBrand && {color: color as string},
    size: getSize(props.size),
    onClick: props.onClick
  }, {
    default: () => props.label,
    icon
  })
}