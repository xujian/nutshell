import { computed, defineComponent, h, ref, SetupContext } from 'vue'
import { ratingProps, RatingProps } from '../../../../components/rating'
import { xor } from 'lodash-es'

export const Rating = defineComponent({
  name: 'NutuiRating',
  props: ratingProps,
  setup (props: RatingProps, { emit }: Omit<SetupContext, 'expose'>) {

    const size = computed(() => {
      return props.size || 'md'
    })

    const sizeValues = {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 20
    }

    const style = () => ({
      ...props.color
        ? {
            '--color': props.color
          }
        : {}
    })

    return () => h(NutRate, {
      modelValue: props.value,
      size: sizeValues[size.value],
      spacing: 5,
      'onUpdate:modelValue': (value: number) => {
        emit('change', value)
      },
      style: style(),
    })
  }
})
