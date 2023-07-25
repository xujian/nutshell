import { h } from 'vue'
import { Button } from '@nutui/nutui-taro'
import type { ButtonProps } from 'src/components'
import { ButtonType } from '@nutui-types/button/type'

export const button = (props: ButtonProps) => {
  return h(Button, {
    type: props.type as ButtonType
  }, props.label)
}