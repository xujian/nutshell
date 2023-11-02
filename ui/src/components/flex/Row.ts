import {PropType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'

const JUSTIFY = ['start', 'end', 'center', 'around', 'between'] as const
type JustifyValue = typeof JUSTIFY[number]

const ALIGN = ['start', 'end', 'center'] as const
type AlignValue = typeof ALIGN[number]

const props = {
  gutter: {
    type: [Number, String],
    default: 0,
  },
  justify: {
    type: String as PropType<JustifyValue>,
    default: 'start'
  },
  align: {
    type: String as PropType<AlignValue>,
    default: 'start'
  }
}

export type RowProps = MakePropsType<typeof props>

export const NsRow = defineComponent({
  name: 'NsRow',
  props,
  setup (props, ctx) {
    const { slots } = ctx
    return () => h('div', {
      class: [
        'flex',
        'flex-row',
        `justify-${props.justify}`,
        `align-${props.align}`,
      ]
    }, slots)
  }
})
