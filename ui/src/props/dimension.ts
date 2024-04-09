import { PropType } from 'vue'
import { Dimension } from '../types'
import { buildProps } from '../utils/private/props'

export interface DimensionProps {
  height?: Dimension
  maxHeight?: Dimension
  maxWidth?: Dimension
  minHeight?: Dimension
  minWidth?: Dimension
  width?: Dimension
}

export const useDimensionProps = buildProps({
  height: {
    type: [Number, String] as PropType<Dimension>,
  },
  maxHeight: {
    type: [Number, String] as PropType<Dimension>,
  },
  maxWidth: {
    type: [Number, String] as PropType<Dimension>,
  },
  minHeight: {
    type: [Number, String] as PropType<Dimension>,
  },
  minWidth: {
    type: [Number, String] as PropType<Dimension>,
  },
  width: {
    type: [Number, String] as PropType<Dimension>,
  },
})

export function convertDimension (input?: Dimension): string | undefined {
  if (!input) {
    return void 0
  } else if (typeof input === 'number') {
    // 直接使用数字值时 相当于 px
    return `${input}px`
  } else {
    // 其他情况原样返回
    return input
  }
}


export function buildDimensionProps (props: DimensionProps) {
  const dimensionStyles = {
    height: convertDimension(props.height),
    maxHeight: convertDimension(props.maxHeight),
    maxWidth: convertDimension(props.maxWidth),
    minHeight: convertDimension(props.minHeight),
    minWidth: convertDimension(props.minWidth),
    width: convertDimension(props.width),
  }

  return dimensionStyles
}
