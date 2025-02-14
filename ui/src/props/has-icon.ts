import { h, PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { IconFormat, NsIcon } from '../components'
import { Color } from '../composables'
import { MakePropsType } from '../utils'

export type IconPosition = 'start' | 'end'

export const hasIconProps = {
  icon: {
    type: String
  },
  iconPosition: {
    type: String as PropType<IconPosition>,
  },
  iconFill: {
    type: String as PropType<Color>,
  },
  iconFormat: {
    type: String as PropType<IconFormat>,
  },
}

export const useHasIconProps = buildProps(hasIconProps)

export type HasIconProps = MakePropsType<typeof hasIconProps>

export type IconSlots = {
  icon: never
}

const isStaticImage = (url: string) =>
  url.endsWith('.svg') || url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')

export const buildHasIcon = (props: HasIconProps) => {
  return props.icon
    ? isStaticImage(props.icon)
      ? h('img', {
          src: props.icon,
          class: 'icon'
        })
      : h('ns-icon', {
          name: props.icon,
          format: props.iconFormat,
        })
    : null
}

export const buildHasIconClasses = (props: HasIconProps) => [
  ...props.iconPosition ? [`icon-position-${props.iconPosition}`] : [],
]
