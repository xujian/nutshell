import { h, SetupContext } from 'vue'
import type { ChipsProps } from '../../../../components'
import { NsChip } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Chips = (props: ChipsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {
  console.log('===chips props', props)

  return h('div', {
    class: [
      'ns-chips',
      ...props.classes || [],
    ],
    style: {
      ...props.style
    }
  }, {
    default: () => props.options?.map(item => h(NsChip, {
      color: props.color,
      label: item.label
    }))
  })
}
