import {ExtractPropTypes, PropType, defineComponent, h } from 'vue'
import type { Size } from '../../props'

const JUSTIFY = ['start', 'end', 'center', 'around', 'between', 'eventy'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center', 'stretch'] as const
type AlignValue = typeof ALIGN[number]

export const rowProps = {
  justify: {
    type: String as PropType<JustifyValue>,
    default: 'center'
  },
  align: {
    type: String as PropType<AlignValue>,
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
