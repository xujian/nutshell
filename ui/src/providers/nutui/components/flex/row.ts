import { h } from 'vue'
import type { RowProps } from '../../../../components'

export const row = (props: RowProps, ctx) => {
  console.log('row.ts............slots:', ctx)
  const { slots } = ctx
  const { gutter, align, justify } = props
  return h(NutRow, {
    ...gutter && {gutter},
    ...align && {align},
    ...justify && {justify},
    onClick: (e) => {props.click()}
  }, slots.default)
}
