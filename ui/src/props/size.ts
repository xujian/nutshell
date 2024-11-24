import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { Dimension } from '../types'

export const sizes = [
  'xs', 'sm', 'md', 'lg', 'xl'
] as const

/**
 * 尺码
 * 用于表示组件尺寸
 * 或圆角、线条、间距的大小
 */
export type Size = typeof sizes[number]

export function isSize (s: Size | Dimension): s is Size {
  return sizes.includes(s as Size)
}

export const useSizeProps = buildProps({
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
})
