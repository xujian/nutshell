import { h } from 'vue'
import type { RowProps } from '../../../../components'

export const Row = (props: RowProps, ctx) => {
  const { slots } = ctx
  const { gutter, align, justify } = props

  return h(NutRow, {
    gutter, // default 10
    ...align && {align},
    ...justify && {justify},
  }, slots.default)
}
