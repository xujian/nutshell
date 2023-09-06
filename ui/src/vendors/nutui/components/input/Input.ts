import { h } from 'vue'
import { InputProps } from '../../../../components'

export const Input = (props: InputProps) => {
  const classes = [
    'ns-input',
    'ns-border-auto',
    'ns-rounded-auto'
  ].join(' ')
  console.log('input.........h NutInput', props.modelValue)
  return h(NutInput, {
    class: classes,
    // type: props.type,
    border: false,
    value: props.modelValue,
    'onUpdate:value': (value: number | string) => {
      props['onUpdate:modelValue']?.(value)
    }
  })
}