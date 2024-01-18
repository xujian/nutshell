import { ObjectEmitsOptions, PropType, defineComponent } from 'vue'
import { define, MakePropsType } from '../../utils'
import { Color } from '../../composables'
import { useSizeProps } from '../../props/size'
import { buildProps } from '../../utils/private/props'
import { h } from 'vue'

export const useIconProps = buildProps({
  name: {
    type: String,
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
 * 图标组件
 */
export const NsIcon = defineComponent({
  name: 'NsIcon',
  props,
  emits,
  setup (props, ctx) {
    return () => h('i', {
      class: [
        'ns-icon',
        'ni',
        `ni-${props.name}`,
        `font-size-${props.size}`
      ]
    })
  }
})
