import { h } from 'vue'
import type { ChipProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Chip = (props: ChipProps & MarginProps) => {
  const { label, color, textColor } = props
  return h(NutTag, {
    class: ['ns-chip'].concat(props.classes),
    round: true,
  }, () => label)
}