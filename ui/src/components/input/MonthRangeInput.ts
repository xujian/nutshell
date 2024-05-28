import { ObjectEmitsOptions, PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { usePlatform } from '../../composables'
import { useFieldProps, useVariantProps } from '../../props'
import { formatRules, FullValidationRule, ValidationRule } from '../../props/field'
import { DateAsStringOrNumber } from '../../types'

export type MonthRange = [DateAsStringOrNumber, DateAsStringOrNumber]

export const monthRangeInputProps = {
  modelValue: {
    type: Array as unknown as PropType<MonthRange>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: [string | undefined, string | undefined]) => void>
  },
  disabledDate: {
    type: Function as PropType<(currentDate: MonthRange) => boolean>
  },
  ...useFieldProps(),
  ...useVariantProps(),
  inside: {
    type: Boolean,
    default: false,
  }
}

export type MonthRangeInputEmits = {
  change: (value?: [string | undefined, string | undefined]) => void
}

export const monthRangeInputEmits: MonthRangeInputEmits = {
  change: (value?: [string | undefined, string | undefined]) => {}
}

export type MonthRangeInputProps = MakePropsType<typeof monthRangeInputProps, MonthRangeInputEmits>


/**
 * 月份区间输入框 <ns-month-range-input>
 */
export const NsMonthRangeInput = define({
    name: 'NsMonthRangeInput',
    props: monthRangeInputProps,
    emits: monthRangeInputEmits,
    setup (props, ctx) {
      const platform = usePlatform()
      const finalRules = formatRules(props.rules as ValidationRule[], props)
      return {
        props: {
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
