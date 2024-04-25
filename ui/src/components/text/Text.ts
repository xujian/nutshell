import { define, MakePropsType } from '../../utils'
import { useFieldProps, useVariantProps, useModelValuePropsForInput } from '../../props'
import { buildStyles } from '../../props/field'

export const textProps = {
  /**
   * 是否显示金额
   */
  hasAmount: {
    type: Boolean
  },
  /**
   * 金额倍率
   */
  amountRate: {
    type: Number,
    default: 1
  },
  ...useModelValuePropsForInput(),
  ...useVariantProps(),
  ...useFieldProps()
}

export type TextEmits = {}

export type TextSlots = {
  /** 前缀 */
  prepend: never
  /** 后缀 */
  append: never
}

export type TextProps = MakePropsType<typeof textProps, TextEmits>

/**
 * 输入框 <ns-text>
 */
export const NsText = define({
  name: 'NsText',
  props: textProps,
  setup(props, ctx) {
    return {
      props: {
        style: buildStyles(props),
      }
    }
  }
})

