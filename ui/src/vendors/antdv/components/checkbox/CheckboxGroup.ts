import { h, SetupContext } from 'vue'
import { CheckboxGroup as AntdvCheckboxGroup } from 'ant-design-vue'
import type { CheckboxGroupProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

export const CheckboxGroup = (props: CheckboxGroupProps & MarginProps, ctx: SetupContext) => {

  return h(AntdvCheckboxGroup, {
    class: 'ns-checkbox-group',
    options: props.options,
    value: props.modelValue,
    'onUpdate:value': (value: string[]) => {
      console.log('dfdfdfdfdfdf', value, props['onUpdate:modelValue'])
      props['onUpdate:modelValue']?.(value)
    }
  }, () => null)
}
// + import => ./index.ts, ../components.ts
