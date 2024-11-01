import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'
import { PropType } from 'vue'


export const variants: string[] = [
  'solid', 'outlined', 'soft', 'plain'
] as const

/**
 * 组件的内置样式风格
 */
export type Variant = typeof variants[number]

export const variantProps = {
    variant: {
      type: String as PropType<Variant>,
      default: '',
    },
  }

/**
 * 组件可以有多种样式风格
 */
export const useVariantProps = buildProps(variantProps)

export type VariantProps = MakePropsType<typeof variantProps>
