import { computed } from 'vue'
import { convertToUnit } from '../utils'
import { buildProps } from '../utils/private/props'

export interface DimensionProps {
  height?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  width?: number | string
}

export const useDimensionProps = buildProps({
  height: {
    type: [Number, String],
  },
  maxHeight: {
    type: [Number, String],
  },
  maxWidth: {
    type: [Number, String],
  },
  minHeight: {
    type: [Number, String],
  },
  minWidth: {
    type: [Number, String],
  },
  width: {
    type: [Number, String],
  },
})

export function useDimension (props: DimensionProps) {
  const dimensionStyles = computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width),
  }))

  return { dimensionStyles }
}
