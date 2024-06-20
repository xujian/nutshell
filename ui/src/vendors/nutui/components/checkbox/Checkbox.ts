import { h, SetupContext } from 'vue'
import { Checkbox as NutuiCheckbox } from '@nutui/nutui-taro'
import { CheckboxProps } from '../../../../components'

export const Checkbox = (props: CheckboxProps, { slots }: Omit<SetupContext, 'expose'>) => {

  return h(NutuiCheckbox, {
    class: 'ns-checkbox',
    label: props.label,
    modelValue: props.modelValue,
    'onUpdate:modelValue': props['onUpdate:modelValue'],
  }, slots)
}
