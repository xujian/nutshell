import { h } from 'vue'
import type { ChipProps } from '../../../../components'

export const Chip = (props: ChipProps) => {
  const { label, color, textColor } = props
  return h(NutTag, {
    round: true,
  }, () => label)
}