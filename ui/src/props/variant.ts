import { buildProps } from '../utils/private/props'
import { PropType } from 'vue'

/**
 * 组件的内置样式风格
 */
export type Variant = 
  /**
   * 简洁风格
   */
  'plain' | 
  /**
   * 外框
   */
  'outlined' | 
  /**
   * 柔和色彩风格
   */
  'soft' | 
  /**
   * 填色风格
   */
  'solid'

/**
 * 组件可以有多种样式风格
 */
export const useVariantProps = buildProps({
  variant: {
    type: String as PropType<Variant>,
    default: '',
  },
})