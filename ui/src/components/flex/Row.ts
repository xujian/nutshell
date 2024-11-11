import {ExtractPropTypes, PropType, defineComponent, h } from 'vue'
import type { Align, Justify } from '../../props'

export const rowProps = {
  justify: {
    type: String as PropType<Justify>,
    default: 'center'
  },
  align: {
    type: String as PropType<Align>,
    default: 'center'
  },
  gap: {
    type: Number,
    default: 0,
  },
  wrap: {
    type: Boolean,
  },
  grow: {
    type: Number,
  }
}

export type RowProps = ExtractPropTypes<typeof rowProps>

/**
 * 行组件 <ns-row>
 */
export const NsRow = defineComponent({
  name: 'NsRow',
  props: rowProps,
  setup (props, ctx) {
    const { slots } = ctx
    return () => h('div', {
      class: [
        'ns-row',
        'flex',
        'row',
        `justify-${props.justify}`,
        `align-${props.align}`,
        ...props.wrap ? ['wrap'] : [],
        ...(props.gap && typeof props.gap === 'string') ? [`gap-${props.gap}`] : [],
        ...props.grow !== void 0 ? ['grow'] : [],
        ...props.gap ? ['has-gap'] : []
      ],
      style: {
        ...props.gap !== void 0 ? {'--gap': `${props.gap}px`} : {}
      }
    }, slots)
  }
})
