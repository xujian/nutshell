import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'
import type { PropType } from 'vue'


export const variants = [
  'solid', 'outlined', 'soft', 'plain'
] as const

export function hasVariantProps (props: any): props is  VariantProps {
  return 'variant' in props
}

/**
 * 组件的内置样式风格
 */
export type Variant = typeof variants[number]

export const variantProps = {
    variant: {
      type: String as PropType<Variant>,
    },
  }

/**
 * 组件可以有多种样式风格
 */
export const useVariantProps = buildProps(variantProps)

export type VariantProps = MakePropsType<typeof variantProps>
