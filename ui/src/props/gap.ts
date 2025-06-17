import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { Size } from './size'

const gapProps = {
  /**
   * 部件之间的空隙
   * <ns-list gap>
   * <ns-list gap="md">
   * <ns-list :gap="10">
   */
  gap: {
    type: [Boolean, Number, String] as PropType<boolean | number | Size>,
  },
}

interface GapProps {
  gap?: boolean | number | Size;
}

export const buildGapClasses = (props: GapProps) => [
  ...props.gap
    ? ['has-gap']
    : [],
]

export const buildGapStyles = (props: GapProps) => ({
  ...props.gap !== void 0 && props.gap !== false
    ? {
        '--gap': typeof props.gap === 'number'
          ? `${props.gap}px`
          : `var(--ns-spacing-${typeof props.gap === 'boolean' ? 'md' : props.gap})`
      }
    : {}
  })
export const useGapProps = buildProps(gapProps)
