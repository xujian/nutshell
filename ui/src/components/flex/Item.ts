import { PropType, h } from 'vue'
import { defineComponent } from 'vue'
import { MakePropsType } from '../../utils/private/helpers'

const props = {
  gap: {
    type: [Number, String],
    default: 10,
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

export type FlexItemProps = MakePropsType<typeof props>

/**
 * Flex item <ns-flex-item>
 */
export const NsFlexItem = defineComponent({
  name: 'NsFlexItem',
  props,
  setup (props, { slots }) {
    return () => h('div', {
      class: [
        'flex-item',
        ...props.grow ? ['flex-grow'] : [],
      ],
      style: {
        '--gap': typeof props.gap === 'number'
          ? `${props.gap}px`
          : props.gap
      }
    }, slots)
  }
})
