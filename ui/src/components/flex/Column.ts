import { PropType, h } from 'vue'
import { defineComponent } from 'vue'
import { MakePropsType } from '../../utils/private/helpers'

const JUSTIFY = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center', 'stretch'] as const
type AlignValue = typeof ALIGN[number]

const props = {
  gap: {
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

export type ColumnProps = MakePropsType<typeof props>

/**
 * Flex column <ns-column>
 */
export const NsColumn = defineComponent({
  name: 'NsColumn',
  props,
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'flex',
        'flex-column',
        ...props.grow ? ['flex-grow'] : [],
        ...props.justify ? [`justify-${props.justify}`] : [],
        ...props.align ? [`align-${props.align}`] : [],
      ],
      style: {
        '--gap': typeof props.gap === 'number'
          ? `${props.gap}px`
          : props.gap
      }
    }, slots)
  }
})
