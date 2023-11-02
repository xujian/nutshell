import { ExtractPublicPropTypes, PropType, h } from 'vue'
import { define } from '../../utils'
import { defineComponent } from 'vue'
import { MakePropsType } from 'src/utils/private/helpers'

const JUSTIFY = ['start', 'end', 'center'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center'] as const
type AlignValue = typeof ALIGN[number]

const props = {
  gutter: {
    type: [Number, String],
    default: 10,
  },
  justify: {
    type: String as PropType<JustifyValue>,
    default: 'center'
  },
  align: {
    type: String as PropType<AlignValue>,
    default: 'center'
  },
  span: {
    type: [Number, String],
    default: 12
  },
  /**
   * 在 <ns-row> 内占据的空间
   */
  grow: {
    type: Number,
    default: 0
  }
}

export type ColProps = MakePropsType<typeof props>

export const NsCol = defineComponent({
  name: 'NsCol',
  props,
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'flex',
        'flex-col',
        ...props.grow ? ['flex-grow'] : [],
        `justify-${props.justify}`,
        `align-${props.align}`,
      ]
    }, slots)
  }
})
