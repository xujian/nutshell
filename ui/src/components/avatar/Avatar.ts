import { PropType, defineComponent, h, VNode } from 'vue'
import { MakePropsType } from '../../utils'
import { Color } from '../../composables'
import { useSizeProps } from '../../props/size'
import { buildDesignClasses, buildDesignStyles, useDesignProps } from '../../props'

export type AvatarFormat =
  /**
   * 图片
   */
  'image' |
  /**
   * 名字
   */
  'name'


const avatarProps = {
  /**
   * 图片URI或文本
   */
  src: {
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
  ...useDesignProps(),
}

export type AvatarEmits = {
}

const avatarEmits: AvatarEmits = {
}

export type AvatarProps = MakePropsType<typeof avatarProps, AvatarEmits>

const isImage = (src?: string) => src?.startsWith('http')

const render: (props: AvatarProps) => VNode = (props: AvatarProps) => {

  const classes = buildDesignClasses(props),
    styles = buildDesignStyles(props)
  return isImage(props.src)
    ? h('img', {
        class: [
          'ns-avatar',
          'image-format',
          props.size && `size-${props.size}`,
          props.clickable && 'clickable',
          ...classes,
        ],
        src: props.src,
        style: {
          '--size': props.size,
          ...styles,
        }
      })
    : h('div', {
        class: [
          'ns-avatar',
          'text-format',
          'row',
          'justify-center',
          'align-center',
          props.size && `size-${props.size}`,
          props.clickable && 'clickable',
          ...classes,
        ],
        style: {
          '--size': props.size,
          ...styles,
        }
      }, props.src)
}

/**
 * 头像组件 <ns-avatar>
 */
export const NsAvatar = defineComponent({
  name: 'NsAvatar',
  inheritAttrs: true,
  props: avatarProps,
  emits: avatarEmits,
  setup(props) {
    return () => render(props)
  }
})
