import { h } from 'vue'
// import { Button } from '@nutui/nutui-taro'
import type { ButtonEmits, ButtonProps } from 'src/components'

export const button = (props: ButtonProps & ButtonEmits) => {
  return h(NutButton, {
    type: props.type as never,
    label: props.label,
    onClick: (e) => {props.click()}
  }, props.label)
}