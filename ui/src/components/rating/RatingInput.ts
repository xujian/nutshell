import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'

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

export type RatingInputProps = ExtractPublicPropTypes<typeof ratingProps>

export interface RatingInputEmits extends ObjectEmitsOptions {
}

const emits: RatingInputEmits = {
}

export interface RatingInputSlots extends SlotsType {
  default: never,
}

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
