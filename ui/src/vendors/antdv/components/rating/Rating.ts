import { h, SetupContext } from 'vue'
import { Rate as AntdvRating, FormItem as AntFormItem } from 'ant-design-vue'
import { RatingProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

export const Rating = (props: RatingProps & MarginProps, ctx: SetupContext) => {

  return h(AntFormItem, {
    class: [
      'ns-rating',
      'ns-form-item',
    ],
    label: props.label,
  },
    h(AntdvRating, {
      class: 'ns-rating-control',
      value: props.modelValue,
      'onUpdate:value': (value: number) => {
        props['onUpdate:modelValue']?.(value)
      }
    }, null)
  )
}
// + import => ./index.ts, ../components.ts
