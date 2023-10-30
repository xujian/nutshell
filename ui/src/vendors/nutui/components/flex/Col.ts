import { h, SetupContext } from 'vue'
import type { ColProps } from '../../../../components'
import { VendorRenderFunction } from '../../../../shared'

export const Col: VendorRenderFunction = (props, ctx) => {
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

