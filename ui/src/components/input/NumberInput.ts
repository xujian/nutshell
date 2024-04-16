import { InputEmits, inputEmits } from './Input'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, buildStyles, formatRules } from '../../props/field'

export const numberInputProps = {
  maxlength: {
    type: Number
  },
  lazy: {
    type: Boolean,
    default: true
  },
  max: {
    type: Number
  },
  min: {
    type: Number
  },
  step: {
    type: Number
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  precision: {
    type: Number
  },
  hasAmount: {
    type: Boolean
  },
  amountRate: {
    type: Number,
    default: 1
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps()
}

export type NumberInputProps = MakePropsType<typeof numberInputProps, InputEmits>

/**
 * 数字输入框 <ns-number-input>
 */
export const NsNumberInput = define({
  name: 'NsNumberInput',
  props: numberInputProps,
  emits: inputEmits,
  setup(props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        style: buildStyles(props),
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
