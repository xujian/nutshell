import { buildProps } from '../utils/private/props'
import { PropType } from 'vue'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
// extra-small, small, medium, large, extra-large

export const useSizeProps = buildProps({
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
})
