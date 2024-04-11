import { h, SetupContext } from 'vue'
import { Rate as AntdvRating } from 'ant-design-vue'
import { RatingProps } from '../../../../components'

export const Rating = (props: RatingProps, { emit }: SetupContext) => {

  const style = {
    ...props.color
      ? {
          '--color': props.color
        }
      : {}
  }

  return h(AntdvRating, {
    class: ['ns-rating'],
    value: props.modelValue,
    onChange: props.onChange,
    style,
  })
}
// + import => ./index.ts, ../components.ts
