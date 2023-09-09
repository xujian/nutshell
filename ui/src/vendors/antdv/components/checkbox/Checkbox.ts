import { h, SetupContext } from 'vue'
import { Checkbox as AntdvCheckbox } from 'ant-design-vue'
import { checkboxProps } from '../../../../components'
import type { CheckboxProps } from '../../../../components'
import { MarginProps, marginProps } from '../../../../utils'

export const Checkbox = (props: CheckboxProps & MarginProps, ctx: SetupContext) => {

  return h(AntdvCheckbox, {
    class: ['ns-checkbox'].concat(marginProps.classes),
    checked: props.modelValue,
    'onUpdate:checked': (value: boolean) => {
      console.log('++++++', value, props['onUpdate:modelValue'])
      props['onUpdate:modelValue']?.(value)
    }
  }, () => props.label)
}
// + import => ./index.ts, ../components.ts
