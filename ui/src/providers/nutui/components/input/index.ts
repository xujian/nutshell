import { h } from 'vue'
import { InputProps } from '../../../../components'

export const input = (props: InputProps) => {
  const classes = [
    'ns-input',
    'ns-border-auto',
    'ns-rounded-auto'
  ].join(' ')
  return h(NutInput, {
    class: classes,
    type: props.type,
    label: props.label,
    border: false,
  })
}