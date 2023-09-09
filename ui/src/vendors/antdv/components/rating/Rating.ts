import { h, SetupContext } from 'vue'
import { Rate as AntdvRating } from 'ant-design-vue'
import { RatingProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

export const Rating = (props: RatingProps & MarginProps, ctx: SetupContext) => {
  console.log('----------', props)
  return h('div', {
      class: 'ns-rating flex flex-row align-center ant-form-item',
    }, [
      h('label', {
        class: 'flex-col form-field-label ant-col ant-form-item-label',
      }, props.label),
      h(AntdvRating, {
        class: 'flex-col form-field-control',
        value: props.modelValue,
        'onUpdate:value': (value: number) => {
          props['onUpdate:modelValue']?.(value)
        }
      }, null)
    ]
  )
}
// + import => ./index.ts, ../components.ts
