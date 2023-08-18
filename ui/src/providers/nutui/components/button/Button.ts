import { h } from 'vue'
// import { Button } from '@nutui/nutui-taro'
import type { ButtonEmits, ButtonProps } from 'src/components'

export const Button = (props: ButtonProps & ButtonEmits) => {
  const { type, label, width, color, disabled,
    maxWidth, height, maxHeight, minWidth, minHeight,
    click,
    ...p } = props
  return h(NutButton, {
    type: props.type as never,
    label, color, disabled,
    onClick: (e) => {props.click()}
  }, props.label)
}