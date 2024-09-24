import { h, SetupContext } from 'vue'
import type { ChipsProps } from '../../../../components'
import { NsChip } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { VendorWrapper } from '../../../VendorWrapper'

export const Chips = (props: ChipsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {
  return h(VendorWrapper, {
    ignoreDesign: true
  }, {
    default: () => props.items?.map(item => h(NsChip, {
      color: props.color || 'primary',
      label: item.label
    }))
  })
}
