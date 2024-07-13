import { ExtractPropTypes, PropType } from 'vue'
import { Color, GradientString } from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

export type FlexDirection = 'row' | 'column'
export type Align = 'start' | 'end' | 'between' | 'space'
export type Justify = 'start' | 'end' | 'between' | 'space'
export type TextAlign = 'start' | 'end' | 'center'

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
  gap: {
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

export type FlexProps = MakePropsType<typeof flexProps>

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
    ...props.gap && {
      '--gap': `${props.gap}px`,
    },
    ...props.justify && {
      '--justify': `${props.justify}`,
    },
    ...props.align && {
      '--align': `${props.align}`,
    },
  }
}

/**
 * 与 Flex Box Layout 相关的属性
 */
export const useFlexProps = buildProps(flexProps)
