import { h } from 'vue'
import type { IconProps } from '../../../../components'

export const Icon = (props: IconProps) => {
  const { source, label, color, size } = props
  const classes = [
    'ns-icon',
  ].join(' ')
  return h('img', {
    class: classes,
    label, color,
    src: source,
  })
}