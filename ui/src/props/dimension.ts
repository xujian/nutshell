import { PropType } from 'vue'
import { Dimension } from '../types'
import { buildProps } from '../utils/private/props'

export interface DimensionProps {
  height?: Dimension
  maxHeight?: Dimension
  maxWidth?: Dimension
  minHeight?: Dimension
  minWidth?: Dimension
  width?: Dimension,
  ratio?: string,
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
  ratio: {
    type: String,
  }
})

export function convertDimension (input?: Dimension): string | undefined {
  if (!input) {
    return void 0
  } else if (typeof input === 'number' || input.match(/^\d+$/)) {
    // 直接使用数字值时 相当于 px
    return `${input}px`
  } else {
    // 其他情况原样返回
    return input
  }
}


export function buildDimensionStyles (props: DimensionProps) {
  return {
    ...props.height !== void 0 ? { height: convertDimension(props.height) } : {},
    ...props.width !== void 0 ? { width: convertDimension(props.width) } : {},
    ...props.maxHeight !== void 0 ? { maxHeight: convertDimension(props.maxHeight) } : {},
    ...props.maxWidth !== void 0 ? { maxWidth: convertDimension(props.maxWidth) } : {},
    ...props.minHeight !== void 0 ? { minHeight: convertDimension(props.minHeight) } : {},
    ...props.minWidth !== void 0 ? { minWidth: convertDimension(props.minWidth) } : {},
    ...props.ratio ? { aspectRadio: props.ratio } : {},
  }
}
