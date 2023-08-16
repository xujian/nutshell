import { h } from 'vue'
import type { ColProps } from '../../../../components'

export const col = (props: ColProps, ctx) => {
  const { align, justify, span } = props
  const { slots } = ctx
  const classes = [
    'ns-col'
  ].join(' ')
  return h(NutCol, {
    class: classes,
    ...align && {align},
    ...justify && {justify},
    ...span && {span},
    onClick: (e) => {props.click()}
  }, slots.default)
}
