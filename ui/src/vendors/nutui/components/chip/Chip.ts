import { SetupContext, h } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Chip = (props: ChipProps & MarginProps, { slots }: Omit<SetupContext, 'expose'>) => {
  return h(NutTag, {
    class: [
      ...props.classes || []
    ],
    color: props.color,
    round: true,
  }, () => [
    slots.default?.(),
    props.label,
  ])
}
