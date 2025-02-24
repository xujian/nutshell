import { PropType, defineComponent, h, VNode } from 'vue'
import { MakePropsType } from '../../utils'
import { Color } from '../../composables'
import { useSizeProps } from '../../props/size'
import { buildProps } from '../../utils/private/props'
import { useNutshell } from '../../types'

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
   * 独立 SVG (用于小程序)
   */
  'svg' |
  /**
   * 直接用普通图片
   */
  'image' |
  /**
   * 直接用 css class 定义
   */
  'css'

export const useIconProps = buildProps({
  name: {
    type: String,
  },
  format: {
    type: String as PropType<IconFormat>,
    default: () => 'css',
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
  clickable: {
    type: Boolean,
    default: false,
  },
  ...useSizeProps(),
})

const props = {
  ...useIconProps(),
}

export type IconEmits = {
}

const emits: IconEmits = {
}

export type IconProps = MakePropsType<typeof props, IconEmits>

/**
 * 按照 format 输出对应的格式
 */
const formats: Record<IconFormat, (props: IconProps) => VNode> = {
  css: (props: IconProps) => h('i', {
      class: [
        'ns-icon',
        `ns-icon-${props.name}`,
        `font-size-${props.size}`,
        props.clickable && 'clickable'
      ]
    }),
  font: (props: IconProps) => h('i', {
      class: [
        'ns-icon',
        'ni',
        `ni-${props.name}`,
        `font-size-${props.size}`,
        props.clickable && 'clickable'
      ]
    }),
  sprite: (props: IconProps) => h('svg', {
      class: [
        'ns-icon',
        `ns-icon-${props.name}`,
        `font-size-${props.size}`,
        props.clickable && 'clickable'
      ]
    }, h('use', {
      href: `/sprite.svg#${props.name}`
    })),
  svg:  (props: IconProps) => h('img', {
      class: [
        'ns-icon',
        props.size && `font-size-${props.size}`,
        props.clickable && 'clickable'
      ],
      src: `/icons/default/${props.name}.svg`
    }),
  image: (props: IconProps) => h('img', {
    class: [
      'ns-icon',
      props.size && `font-size-${props.size}`,
      props.clickable && 'clickable'
    ],
    src: props.name
  }),
}

/**
 * 图标组件 <ns-icon>
 */
export const NsIcon = defineComponent({
  name: 'NsIcon',
  inheritAttrs: true,
  props,
  emits,
  setup (props, ctx) {
    const $n = useNutshell()
    let format = props.format
      || $n?.options.icon
      || 'sprite'
    if (props.name?.startsWith('http')) {
      format = 'image'
    }
    return () => formats[format](props)
  }
})
