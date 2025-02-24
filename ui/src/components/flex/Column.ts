import { PropType, h } from 'vue'
import { defineComponent } from 'vue'
import { type Justify, type Align, type Size, useGapProps, buildGapStyles, buildGapClasses } from '../../props'
import { MakePropsType } from '../../utils/private/helpers'

const columnProps = {
  justify: {
    type: String as PropType<Justify>,
    default: 'center'
  },
  align: {
    type: String as PropType<Align>,
    default: 'center'
  },
  ...useGapProps(),
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

export type ColumnProps = MakePropsType<typeof columnProps>

/**
 * Flex column <ns-column>
 */
export const NsColumn = defineComponent({
  name: 'NsColumn',
  props: columnProps,
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'ns-column',
        'flex',
        'flex-column',
        ...props.grow > 0  ? ['flex-grow'] : [],
        ...props.grow === 0  ? ['flex-fixed'] : [],
        ...props.justify ? [`justify-${props.justify}`] : [],
        ...props.align ? [`align-${props.align}`] : [],
        ...buildGapClasses(props)
      ],
      style: {
        ...buildGapStyles(props)
      }
    }, slots)
  }
})
