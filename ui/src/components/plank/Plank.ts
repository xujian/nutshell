import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'

export const plankProps = {
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  caption: {
    type: String
  }
}


export type PlankSlots = {
  /** 后缀 */
  content: never
}

export const plankSlots: SlotsType<PlankSlots> = {
}

export type PlankProps = MakePropsType<typeof plankProps>

/**
 * 单元格组件
 */

/**
 * 单元格组件 <ns-plank>
 */
export const NsPlank = define({
  name: 'NsPlank',
  props: plankProps,
  setup (props, ctx) {
    return {
    }
  }
})
