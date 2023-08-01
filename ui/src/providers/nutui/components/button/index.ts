import { h } from 'vue'
// import { Button } from '@nutui/nutui-taro'
import type { ButtonProps } from 'src/components'

export const button = (props: ButtonProps) => {
  return h(NutButton, {
    type: props.type as never,
    label: props.label,
  }, props.label)
}