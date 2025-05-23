import { InputEmits, inputEmits } from './Input'
import { useFieldProps, useModelValuePropsForArray, useModelValuePropsForInput, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'

export const numberRangeInputProps = {
  lazy: {
    type: Boolean,
    default: true
  },
  precision: {
    type: Number
  },
   // 最多小数位
   maximumFractionDigits: {
    type: Number,
  },
  amountRate: {
    type: Number,
    default: 1
  },
  ...useVariantProps(),
  ...useModelValuePropsForArray(),
  ...useFieldProps()
}

export type NumberRangeInputProps = MakePropsType<typeof numberRangeInputProps, InputEmits>

/**
 * 数字区间输入框 <ns-number-range-input>
 */
export const NsNumberRangeInput = define({
  name: 'NsNumberRangeInput',
  props: numberRangeInputProps,
  emits: inputEmits,
  setup(props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
