import { SetupContext, h } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Chip = (props: ChipProps & MarginProps, { slots }: SetupContext) => {
  return h(NutTag, {
    class: [
      ...props.classes || []
    ],
    round: true,
  }, [
    slots.default?.(),
    props.label,
  ])
}
