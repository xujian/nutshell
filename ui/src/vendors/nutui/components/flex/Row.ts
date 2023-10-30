import { h, SetupContext } from 'vue'
import type { RowProps } from '../../../../components'
import { VendorRenderFunction } from '../../../../shared/vendor'

export const Row: VendorRenderFunction = (props, ctx) => {
  const { slots } = ctx || {}
  const { gutter, align, justify } = props

  return h(NutRow, {
    gutter, // default 10
    ...align && {align},
    ...justify && {justify},
  }, slots?.default)
}
