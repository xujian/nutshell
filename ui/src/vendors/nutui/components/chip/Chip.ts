import { SetupContext, h, useAttrs } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Chip = (props: ChipProps & MarginProps, { slots }: Omit<SetupContext, 'expose'>) => {

  const $attrs = useAttrs()

  return h(NutTag, {
    round: props.round ?? true,
  }, () => [
    slots.default?.(),
    props.label,
  ])
}
