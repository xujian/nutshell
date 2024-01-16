import { ExtractPropTypes, PropType } from 'vue'
import { Color, GradientString } from '../composables/theme'
import { buildProps } from '../utils/private/props'

export type FlexDirection = 'row' | 'column'

const flexProps = {
  /**
   * 横向还是纵向
   */
  direction: {
    type: String as PropType<FlexDirection>,
    default: () => 'row'
  },
  /**
   * 间隙
   */
  gutter: {
    type: Number,
    default: () => 0
  },
  /**
   * 自动折行
   */
  wrap: {
    type: Boolean,
    default: () => false
  }
}

export type FlexProps = ExtractPropTypes<typeof flexProps>

export const computeFlexProps = (props: FlexProps) => {
  return {
    ...props.gutter && {
      '--flex-gutter': `${props.gutter}px`,
    },
    '--flex-direction': `${props.direction}px`,
    '--flex-wrap': props.wrap ? 'wrap' : 'no-wrap'
  }
}

/**
 * 与 Flex Box Layout 相关的属性
 */
export const useFlexProps = buildProps(flexProps)
