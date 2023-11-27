import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'

export const ratingInputProps = {
  label: {
    type: String
  },
  modelValue: {
    type: Number,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | string) => void>
  }
}

export type RatingInputEmits = {
}

const emits: RatingInputEmits = {
}

export type RatingInputSlots = {
  default: never,
}

export type RatingInputProps = MakePropsType<typeof ratingInputProps, RatingInputEmits>

/**
 * Rating <ns-rating-input>
 */
export const NsRatingInput = define({
  name: 'NsRatingInput',
  props: ratingInputProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
