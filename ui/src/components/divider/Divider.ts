import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { Color } from '../../composables/theme'
import { buildDesignVariables } from '../../props'

export type DividerOrientationType = 'left' | 'right' | 'center'

export type DividerDirectionType = 'vertical' | 'horizontal'

export const dividerProps = {
  dashed: {
    type: Boolean
  },
  orientation: {
    type: String as PropType<DividerOrientationType>
  },
  direction: {
    type: String as PropType<DividerDirectionType>
  },
  fill: {
    type: String as PropType<Color>
  }
}

export type DividerEmits = {}

const dividerEmits: DividerEmits = {}

export type DividerSlots = {
  default: never
}

export type DividerProps = MakePropsType<typeof dividerProps, DividerEmits>



/**
 *  分割线组件 <ns-divider>
 */
export const NsDivider = define({
  name: 'NsDivider',
  props: dividerProps,
  emits: dividerEmits,
  setup(props, ctx) {
    return {}
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
