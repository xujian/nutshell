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
  clickable: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean
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

/**
 * 头像组件 <ns-avatar>
 */
export const NsAvatar = defineComponent({
  name: 'NsAvatar',
  inheritAttrs: true,
  props: avatarProps,
  emits: avatarEmits,
  setup(props) {

    const classes = buildDesignClasses(props),
      styles = buildDesignStyles(props)

    return () => h('div', {
          class: [
            'ns-avatar',
            `text-${isImage(props.src) ? 'image' : 'text'}`,
            'row',
            'justify-center',
            'align-center',
            ...props.circle ? ['circle'] : [],
            props.size && `size-${props.size}`,
            props.clickable && 'clickable',
            ...classes,
          ],
          style: {
            '--size': props.size,
            ...styles,
            ...isImage(props.src)
              ? {
                  backgroundImage: `url(${props.src})`
                }
              : {}
          }
        }, {
          default: () => isImage(props.src)
            ? null
            : props.src
        }
      )
    }
})
