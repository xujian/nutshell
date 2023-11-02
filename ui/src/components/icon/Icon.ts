import { ObjectEmitsOptions, PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { Color } from '../../composables'
import { useSizeProps } from '../../props/size'
import { buildProps } from '../../utils/private/props'

export const useIconProps = buildProps({
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

export interface IconEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: IconEmits = {
  click: () => void 0
}

export type IconProps = MakePropsType<typeof props, IconEmits>

/**
 * 图标组件
 */
export const NsIcon = define({
  name: 'NsIcon',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
