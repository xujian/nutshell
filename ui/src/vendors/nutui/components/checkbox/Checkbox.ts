import { h, SetupContext } from 'vue'
import { type CheckboxProps } from '../../../../components'

export const Checkbox = (props: CheckboxProps, { slots }: Omit<SetupContext, 'expose'>) => {

  return h(NutCheckbox, {
    class: 'ns-checkbox',
    label: props.label, // 注意这里的label不是用来渲染文本的，是用来绑定value的。
    modelValue: props.modelValue,
    textPosition: props.textPosition,
    shape: props.shape,
    disabled: props.disabled,
    'onUpdate:modelValue': props['onUpdate:modelValue'],
  }, slots)
}
