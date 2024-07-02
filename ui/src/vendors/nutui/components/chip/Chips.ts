import { h, SetupContext } from 'vue'
import type { ChipsProps } from '../../../../components'
import { NsChip } from '../../../../components'

export const Chips = (props: ChipsProps, ctx: Omit<SetupContext, 'expose'>) => {

  return h('div', {
    class: 'ns-chips',
  }, {
    default: () => props.options?.map(item => h(NsChip, {
      color: props.color,
      label: item.label
    }))
  })
}
