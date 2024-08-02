import { h, SetupContext } from 'vue'
import { Checkbox as AntdvCheckbox } from 'ant-design-vue'
import { checkboxProps } from '../../../../components'
import type { CheckboxProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Checkbox = (props: CheckboxProps & MarginProps, ctx: SetupContext) => {

  return h(AntdvCheckbox, {
    checked: props.modelValue,
    'onUpdate:checked': (value: boolean) => {
      props['onUpdate:modelValue']?.(value)
    },
    disabled: props.disabled ?? false,
  }, () => props.label)
}
// + import => ./index.ts, ../components.ts
