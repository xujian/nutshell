import { ExtractPropTypes, PropType } from 'vue'
import { Color, GradientString } from '../composables/theme'
import { buildProps } from '../utils/private/props'

export type FlexDirection = 'row' | 'column'
export type Align = 'start' | 'end' | 'between' | 'space'
export type Justify = 'start' | 'end' | 'between' | 'space'

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
  },
  align: {
    type: String as PropType<Align>,
    default: 'center'
  },
  justify: {
    type: String as PropType<Justify>,
    default: 'stretch'
  }
}

export type FlexProps = ExtractPropTypes<typeof flexProps>

export const buildFlexClasses = (props: FlexProps) => {
  return [
    'flex',
    `${props.direction}`,
    `align-${props.align}`,
    `justify-${props.justify}`,
  ]
}

export const buildFlexStyles = (props: FlexProps) => {
  return {
    ...props.gutter && {
      '--flex-gutter': `${props.gutter}px`,
    },
  }
}

/**
 * 与 Flex Box Layout 相关的属性
 */
export const useFlexProps = buildProps(flexProps)
