import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'
import { buildGapClasses, buildGapStyles, useGapProps } from './gap'

export const justifies = ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'] as const
export type Justify = typeof justifies[number]

export const aligns = ['start', 'end', 'center', 'stretch'] as const
export type Align = typeof aligns[number]

export type FlexDirection = 'row' | 'column'
export type TextAlign = 'start' | 'end' | 'center'

const flexProps = {
  /**
   * 横向还是纵向
   */
  direction: {
    type: String as PropType<FlexDirection>,
    default: () => 'row'
  },
  ...useGapProps(),
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
    ...props.direction ? [`${props.direction}`] : [],
    ...props.align ? [`align-${props.align}`] : [],
    ...props.justify ? [`justify-${props.justify}`] : [],
    ...props.wrap ? ['wrap'] : [],
    ...buildGapClasses(props),
  ]
}

export const buildFlexStyles: (props: FlexProps) => Record<string, string>
  = (props: FlexProps) => {
  return {
    ...buildGapStyles(props),
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
