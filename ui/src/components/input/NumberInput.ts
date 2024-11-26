import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'
import { PropType, SlotsType } from 'vue'

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
  /**
   * 带有加减按钮
   */
  step: {
    type: Number
  },
  formatter: {
    type: Function as PropType<NumberInputFormatter>
  },
  parser: {
    type: Function
  },
  // 最多小数位
  maximumFractionDigits: {
    type: Number,
  },
  // 最少小数位
  minimumFractionDigits: {
    type: Number,
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
}

export const numberInputEmits: NumberInputEmits = {
}

export type NumberInputSlots = {
  /** 前缀 */
  prepend: never
  /** 后缀 */
  append: never
}

export const numberInputSlots: SlotsType<NumberInputSlots> = {
}

export type NumberInputProps = MakePropsType<typeof numberInputProps, NumberInputEmits>

/**
 * 数字输入框 <ns-number-input>
 */
export const NsNumberInput = define({
  name: 'NsNumberInput',
  props: numberInputProps,
  emits: numberInputEmits,
  slots: numberInputSlots,
  setup(props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
