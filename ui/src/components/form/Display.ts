import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export const displayProps = {
  label: {
    type: String
  },
  value: {
    type: String,
  }
}

export type DisplayEmits = {
}

const displayEmits: DisplayEmits = {
}

export type DisplaySlots = {
  default: never,
}

export type DisplayProps = MakePropsType<typeof displayProps, DisplayEmits>

/**
 * 只读 form-item <ns-display>
 */
export const NsDisplay = define({
  name: 'NsDisplay',
  props: displayProps,
  emits: displayEmits,
  setup (props, ctx) {
    return {
    }
  }
})
