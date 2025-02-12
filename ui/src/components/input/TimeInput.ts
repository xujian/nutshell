import { PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, formatRules, useFieldProps, useModelValuePropsForString, useVariantProps } from '../../props'

export const timeInputProps = {
  ...useModelValuePropsForString(),
  format: {
    type: String,
  },
  disabledTime: {
    type: Function as PropType<(date: any) => {}>
  },
  /**
   * 时间栏分钟步数
   */
  minuteStep: {
    type: Number,
    default: 1,
  },
  /**
   * 加上秒
   */
  hasSeconds: {
    type: Boolean,
  },
  ...useFieldProps(),
  ...useVariantProps(),
}

export type TimeInputEmits = {
  change: (value: string | number) => void
}

export const timeInputEmits: TimeInputEmits = {
  change: (value: string | number) => true
}

export type TimeInputProps = MakePropsType<typeof timeInputProps, TimeInputEmits>


/**
 * 专门用来输入时间 <ns-time-input>
 */
export const NsTimeInput = define({
    name: 'NsTimeInput',
    props: timeInputProps,
    emits: timeInputEmits,
    setup (props, ctx) {
      const finalRules = formatRules(props.rules as ValidationRule[], props)
      return {
        props: {
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
