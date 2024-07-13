import { h, SetupContext } from 'vue'
import { RatingProps } from '../../../../components'

export const Rating = (props: RatingProps, { emit }: Omit<SetupContext, 'expose'>) => {

  const style = {
    ...props.color
      ? {
          '--color': props.color
        }
      : {}
  }

  return h(NutRate, {
    modelValue: props.value,
    size: 12,
    spacing: 5,
    'onUpdate:modelValue': (value: number) => {
      emit('change', value)
    },
    style,
  })
}
