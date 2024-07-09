import { h } from 'vue'
import { Image as NutImage } from '@nutui/nutui'
import type { IconProps } from '../../../../components'

export const Icon = (props: IconProps) => {
  const { name, label, color, size } = props
  const isImage = name?.startsWith('http://')
  return isImage
    ? h(NutImage, {
        class: [
          'ns-icon',
          `size-${size}`
        ],
        src: name,
      })
    : h('i', {
        class: [
          'ns-icon',
          'icon-20',
          `size-${size}`,
          `ns-icon-${name}`
        ]
      })
}
