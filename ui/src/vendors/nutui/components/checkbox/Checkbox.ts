import { h, SetupContext } from 'vue'
import { type CheckboxProps } from '../../../../components'

export const Checkbox = (props: CheckboxProps, { slots }: Omit<SetupContext, 'expose'>) => {

  return h(NutCheckbox, {
    class: 'ns-checkbox',
    label: props.label,
    modelValue: props.modelValue,
    textPosition: props.textPosition,
    disabled: props.disabled,
    'onUpdate:modelValue': props['onUpdate:modelValue'],
  }, slots)
}
