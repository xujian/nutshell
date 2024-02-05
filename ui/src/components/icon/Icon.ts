import { ObjectEmitsOptions, PropType, defineComponent, h, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'
import { Color } from '../../composables'
import { useSizeProps } from '../../props/size'
import { buildProps } from '../../utils/private/props'
import { useNutshell } from '../../framework'

export type IconFormat =
  /**
   * Icon font + CSS
   */
  'font' |
  /**
   * SVG Sprite
   */
  'sprite' |
  /**
   * 配色 SVG (用于小程序)
   */
  'svg'

export const useIconProps = buildProps({
  name: {
    type: String,
  },
  format: {
    type: String as PropType<IconFormat>,
    default: () => 'sprite',
  },
  /**
   * SVG或图片URI
   */
  source: {
    type: String,
  },
  label: {
    type: String,
  },
  color: {
    type: String as PropType<Color>,
  },
  ...useSizeProps(),
})

const props = {
  ...useIconProps(),
}

export type IconEmits = {
  click: () => void
}

const emits: IconEmits = {
  click: () => void 0
}

export type IconProps = MakePropsType<typeof props, IconEmits>

/**
 * 按照 format 输出对应的格式
 */
const formats: Record<IconFormat, (props: IconProps) => VNode> = {
  font: (props: IconProps) => h('i', {
      class: [
        'ns-icon',
        'ni',
        `ni-${props.name}`,
        `font-size-${props.size}`
      ]
    }),
  sprite: (props: IconProps) => h('svg', {
      class: [
        'ns-icon',
        `font-size-${props.size}`
      ]
    }, h('use', {
      href: `http://localhost:2024/sprite.svg#${props.name}`
    })),
  svg:  (props: IconProps) => h('img', {
      class: [
        'ns-icon',
        props.size && `font-size-${props.size}`
      ],
      src: `http://localhost:2024/icons/default/${props.name}.svg`
    }),
}

/**
 * 图标组件
 */
export const NsIcon = defineComponent({
  name: 'NsIcon',
  props,
  emits,
  setup (props, ctx) {
    const $n = useNutshell()
    const format = props.format
      || $n?.options.icon
      || 'sprite'
    return () => formats[format](props)
  }
})
