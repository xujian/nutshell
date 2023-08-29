import { h } from 'vue'
// import { Button } from '@nutui/nutui-taro'
import type { ButtonEmits, ButtonProps } from 'src/components'
import { Size } from '../../../../props/size'

const sizeMapping: Record<Size, string> = {
  auto: 'normal',
  xs: 'mini',
  sm: 'small',
  md: 'normal',
  lg: 'large',
  xl: 'large'
}

export const Button = (props: ButtonProps & ButtonEmits) => {
  const { type, label, width, color, disabled,
    maxWidth, height, maxHeight, minWidth, minHeight,
    ...p } = props
  return h(NutButton, {
    // type: props.type as never,
    disabled,
    // size: sizeMapping[props.size],
    onClick: props.onClick
  }, {
    default: () => props.label
  })
}