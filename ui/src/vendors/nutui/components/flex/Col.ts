import { h } from 'vue'
import type { ColProps } from '../../../../components'

export const Col = (props: ColProps, ctx) => {
  const { align, justify, span, gutter } = props
  const { slots } = ctx
  const classes = [
    'ns-col'
  ].join(' ')

  return h(NutCol, {
    class: classes,
    ...align && {align},
    ...justify && {justify},
    ...gutter && {gutter},
    span: span || 12,
    // ...span && {span},
  }, slots.default)
}

