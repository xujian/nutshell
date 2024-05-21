import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, buildStyles, formatRules } from '../../props/field'
import { PropType } from 'vue'

export type NumberInputFormatter = (value: string | number) => string

export const numberInputProps = {
  maxlength: {
    type: Number
  },
  lazy: {
    type: Boolean,
    default: false
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
    type: Function as PropType<NumberInputFormatter>
  },
  parser: {
    type: Function
  },
  precision: {
    type: Number
  },
  /**
   * 带有金额大写
   */
  hasDaxie: {
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

export type NumberInputEmits = {
  change: (value?: number) => void
  blur: () => void
  focus: () => void
}

export const numberInputEmits: NumberInputEmits = {
  change: (value?: number) => {},
  blur: () => {},
  focus: () => {}
}

export type NumberInputProps = MakePropsType<typeof numberInputProps, NumberInputEmits>

/**
 * 数字输入框 <ns-number-input>
 */
export const NsNumberInput = define({
  name: 'NsNumberInput',
  props: numberInputProps,
  emits: numberInputEmits,
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
