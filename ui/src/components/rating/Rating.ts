import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'

export const ratingProps = {
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

export type RatingProps = ExtractPublicPropTypes<typeof ratingProps>

export interface RatingEmits extends ObjectEmitsOptions {
}

const emits: RatingEmits = {
}

export interface RatingSlots extends SlotsType {
  default: never,
}

/**
 * Rating <ns-rating>
 */
export const NsRating = define({
  name: 'NsRating',
  props: ratingProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts