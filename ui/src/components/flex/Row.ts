import {ExtractPropTypes, PropType, defineComponent, h } from 'vue'
import type { Size } from '../../props'

const JUSTIFY = ['start', 'end', 'center', 'around', 'between', 'eventy'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center', 'stretch'] as const
type AlignValue = typeof ALIGN[number]

export const rowProps = {
  justify: {
    type: String as PropType<JustifyValue>,
    default: 'start'
  },
  align: {
    type: String as PropType<AlignValue>,
    default: 'start'
  },
  gap: {
    type: String as PropType<Size>,
    default: 'none',
  }
}

export type RowProps = ExtractPropTypes<typeof rowProps>

export const NsRow = defineComponent({
  name: 'NsRow',
  props: rowProps,
  setup (props, ctx) {
    const { slots } = ctx
    return () => h('div', {
      class: [
        'flex',
        'flex-row',
        `justify-${props.justify}`,
        `align-${props.align}`,
        ...props.gap ? [`gap-${props.gap}`] : []
      ],
      style: {
        '--gap': props.gap
      }
    }, slots)
  }
})
