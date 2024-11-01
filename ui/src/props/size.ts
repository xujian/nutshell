import { buildProps } from '../utils/private/props'
import { PropType } from 'vue'

export const sizes = [
  'xs', 'sm', 'md', 'lg', 'xl'
] as const

export type Size = typeof sizes[number]

export const useSizeProps = buildProps({
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
})
