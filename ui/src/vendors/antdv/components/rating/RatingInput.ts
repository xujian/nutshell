import { h, SetupContext } from 'vue'
import { Rate as AntdvRating, FormItem as AntFormItem } from 'ant-design-vue'
import { RatingInputProps, RatingProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

export const RatingInput = (props: RatingInputProps & MarginProps, ctx: SetupContext) => {

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
