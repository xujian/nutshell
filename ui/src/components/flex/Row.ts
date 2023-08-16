import { PropType } from 'vue'
import { define } from '../../utils'

const JUSTIFY = ['start', 'end', 'center'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center'] as const
type AlignValue = typeof ALIGN[number]

const props = {
  gutter: {
    type: Number,
    default: 10,
  },
  justify: {
    type: String as PropType<JustifyValue>,
    default: 'center'
  },
  align: {
    type: String as PropType<AlignValue>,
    default: 'center'
  }
}

export type RowProps = ExtractPublicPropTypes<typeof props>

export const NsRow = define({
  name: 'NsRow',
  props,
  setup (props, ctx) {
    const { slots } = ctx
    return {
      props, 
    }
  }
})
