import { ObjectEmitsOptions, PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { usePlatform } from '../../composables'
import { useFieldProps, useVariantProps } from '../../props'
import { formatRules, FullValidationRule, ValidationRule } from '../../props/field'
import { DateAsStringOrNumber, DateRange } from '../../types'

export const dateRangeInputProps = {
  modelValue: {
    type: Array as unknown as PropType<DateRange>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: [string | undefined, string | undefined]) => void>
  },
  disabledDate: {
    type: Function as PropType<(currentDate: DateRange) => boolean>
  },
  ...useFieldProps(),
  ...useVariantProps(),
  inside: {
    type: Boolean,
    default: false,
  },
  /**
   * 预设时间范围快捷选择
   */
  presets: {
    type: Array as unknown as PropType<any>
  },
}

export type DateRangeInputEmits = {
  change: (value?: DateRange) => void
}

export const dateRangeInputEmits: DateRangeInputEmits = {
  change: (value?: DateRange) => true
}

export type DateRangeInputProps = MakePropsType<typeof dateRangeInputProps, DateRangeInputEmits>


/**
 * 时间区间输入框 <ns-date-range-input>
 */
export const NsDateRangeInput = define({
    name: 'NsDateRangeInput',
    props: dateRangeInputProps,
    emits: dateRangeInputEmits,
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
