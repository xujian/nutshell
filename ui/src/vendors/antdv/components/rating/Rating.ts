import { h, SetupContext } from 'vue'
import { Rate as AntdvRating, FormItem as AntFormItem } from 'ant-design-vue'
import { RatingProps } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Rating = (props: RatingProps, ctx: SetupContext) => {

  return h(AntdvRating, {
    class: ['ns-rating'],
    value: props.modelValue,
    'onUpdate:value': (value: number) => {
      props['onUpdate:modelValue']?.(value)
    }
  })
}
// + import => ./index.ts, ../components.ts
