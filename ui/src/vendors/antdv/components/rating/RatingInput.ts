import { h, SetupContext } from 'vue'
import { Rate as AntdvRating, FormItem as AntFormItem } from 'ant-design-vue'
import { RatingInputProps, RatingProps } from '../../../../components'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from '../input/rules'

export const RatingInput = (props: RatingInputProps, ctx: SetupContext) => {

  const rules = transformRules(props.rules as FullValidationRule[])
  return h(AntFormItem, {
    class: [
      'ns-rating-input',
      'ns-form-item',
    ],
    label: props.label,
    name: props.name,
    rules
  },
    () => h(AntdvRating, {
      class: 'ns-rating',
      value: props.modelValue,
      'onUpdate:value': (value: number) => {
        props['onUpdate:modelValue']?.(value)
      }
    })
  )
}
