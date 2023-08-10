import { InputProps } from '../../../../components'
import { h } from 'vue'


export const input = (props: InputProps) => {
  return h(NutInput, {
    type: props.type,
    label: props.label
  })
}