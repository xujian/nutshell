import { h } from 'vue'
import type { ChipProps } from '../../../../components'

export const Chip = (props: ChipProps) => {
  const { type, label, color, textColor } = props
  return h(NutTag, {
    type, label, color, textColor,
    round: true,
  }, () => props.label)
}