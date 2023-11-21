import { PropType } from 'vue'
import { Color, GradientString } from '../composables/theme'
import { buildProps } from '../utils/private/props'

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  /**
   * 渐变
   */
  gradient: {
    type: String as PropType<GradientString>,
  },
}

export const useDesignProps = buildProps(designProps)
