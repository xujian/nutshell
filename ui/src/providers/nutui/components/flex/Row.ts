import { h } from 'vue'
import type { RowProps } from '../../../../components'

export const Row = (props: RowProps, ctx) => {
  console.log('row.ts............slots:', ctx)
  const { slots } = ctx
  const { gutter, align, justify } = props
  return h(NutRow, {
    ...gutter && {gutter},
    ...align && {align},
    ...justify && {justify},
  }, slots.default)
}
