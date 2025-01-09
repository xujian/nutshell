import { defineComponent, h } from 'vue'
import type { IconProps } from '../../../../components/icon'

export const Icon = defineComponent({
  name: 'NutuiIcon',
  inheritAttrs: true,
  setup: (props: IconProps) => {
    const { name, label, color, size } = props
    const isImage = name?.startsWith('http:')
      || name?.startsWith('https:')
      || name?.startsWith('/')

      return () => isImage
      ? h('img', {
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
})
