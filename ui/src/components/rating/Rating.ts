import { PropType, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { Color } from '../../composables/theme'
import { useSizeProps } from '../../props'

export const ratingProps = {
  label: {
    type: String
  },
  value: {
    type: Number,
  },
  color: {
    type: String as PropType<Color>,
  },
  disabled: {
    type: Boolean,
  },
  ...useSizeProps(),
}

export type RatingEmits = {
  change: (value: number) => boolean
}

const emits: RatingEmits = {
  change: (value: number) => true
}

export interface RatingSlots extends SlotsType {
  default: never,
}

export type RatingProps = MakePropsType<typeof ratingProps, RatingEmits>

/**
 * 评分组件 <ns-rating>
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
