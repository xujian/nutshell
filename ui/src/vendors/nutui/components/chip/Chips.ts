import { h, SetupContext } from 'vue'
import type { ChipsProps } from '../../../../components'
import { NsChip } from '../../../../components'
import { MarginProps } from '../../../../utils'
import { VendorContainer } from '../../../Container'

export const Chips = (props: ChipsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {
  return h(VendorContainer, {
    ignoreDesign: true
  }, {
    default: () => props.options?.map(item => h(NsChip, {
      color: props.color || 'primary',
      label: item.label
    }))
  })
}
