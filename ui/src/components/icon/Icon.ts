import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { Color } from '../../composables'
import { Size } from '../../props/size'
import { EmitsToProps } from '../../utils/private/helpers'

const props = {
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
  size: {
    type: String as PropType<Size>,
    default: 'sm',
  },
}

export interface IconEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits: IconEmits = {
  click: undefined
}

export type IconProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<IconEmits>

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
