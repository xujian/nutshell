import { PropType, h } from 'vue'
import { defineComponent } from 'vue'
import { MakePropsType } from '../../utils/private/helpers'
import { buildGapStyles, useGapProps } from '../../props'

const flexItemProps = {
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

export type FlexItemProps = MakePropsType<typeof flexItemProps>

/**
 * Flex item <ns-flex-item>
 */
export const NsFlexItem = defineComponent({
  name: 'NsFlexItem',
  props: flexItemProps,
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'flex-item',
        ...props.grow ? ['flex-grow'] : [],
      ],
      style: {
        ...buildGapStyles(props)
      }
    }, slots)
  }
})
