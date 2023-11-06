import { h, SetupContext } from 'vue'
import { Rate as AntdvRating, FormItem as AntFormItem } from 'ant-design-vue'
import { RatingInputProps, RatingProps } from '../../../../components'

export const RatingInput = (props: RatingInputProps, ctx: SetupContext) => {

  return h(AntFormItem, {
    class: [
      'ns-rating-input',
      'ns-form-item',
    ],
    label: props.label,
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
