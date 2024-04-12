import { h, SetupContext } from 'vue'
import { CheckboxGroup as AntdvCheckboxGroup } from 'ant-design-vue'
import type { CheckboxGroupProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'
import { CheckboxValueType } from 'ant-design-vue/es/checkbox/interface'

export const CheckboxGroup = (props: CheckboxGroupProps & MarginProps, ctx: SetupContext) => {

  return h(AntdvCheckboxGroup, {
    options: props.options,
    value: props.modelValue as CheckboxValueType[],
    'onUpdate:value': (value: CheckboxValueType[]) => {
      props['onUpdate:modelValue']?.(value as string[])
    }
  }, () => null)
}
// + import => ./index.ts, ../components.ts
