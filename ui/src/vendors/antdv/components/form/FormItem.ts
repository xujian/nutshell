import { h, Ref, ref, SetupContext } from 'vue'
import { FormItem as AntdvFormItem } from 'ant-design-vue'
import { FormItemProps } from '../../../../components'
import type { MarginProps } from '../../../../utils'
import { transformRules } from '../input/rules'
import { FullValidationRule } from '../../../../props/field'

export const FormItem = (props: FormItemProps & MarginProps, { slots }: SetupContext) => {
  const rules = transformRules(props.rules as FullValidationRule[])
  return h(AntdvFormItem, {
    class: [
      'ns-form-item',
      ...props.classes || []
    ],
    name: props.name,
    label: props.label,
    rules,
  }, slots)
}
// + import => ./index.ts, ../components.ts
