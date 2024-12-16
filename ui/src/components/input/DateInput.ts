import { PropType } from 'vue'
import type { Dayjs } from 'dayjs'
import { MakePropsType, define } from '../../utils'
import { FullValidationRule, ValidationRule, formatRules, useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'

export const dateInputProps = {
  ...useModelValuePropsForInput(),
  disabledDate: {
    type: Function as PropType<(currentDate: Dayjs) => boolean>
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  hasNow: {
    type: Boolean,
    default: true
  },
  disabledTime: {
    type: Function as PropType<(date: any) => {}>
  },
  /**
   * 显示时间栏
   */
  hasTime: {
    type: Boolean,
    default: false,
  },
  /**
   * 使用日历面板
   */
  hasCalendar: {
    type: Boolean,
    default: false,
  },
  /**
   * 时间栏分钟步数
   */
  minuteStep: {
    type: Number,
    default: 1,
  },
  /**
   * 时间栏的表示形式
   * 可控制显示时:分:秒
   */
  timeFormat: {
    type: String,
    default: 'HH:mm' // 'HH' 表示只显示小时
  },
  ...useFieldProps(),
  ...useVariantProps(),
}

export type DateInputEmits = {
  change: (value: string | number) => void
}

export const dateInputEmits: DateInputEmits = {
  change: (value: string | number) => true
}

export type DateInputProps = MakePropsType<typeof dateInputProps, DateInputEmits>


/**
 * 日期选择组件 <ns-date-input>
 */
export const NsDateInput = define({
    name: 'NsDateInput',
    props: dateInputProps,
    emits: dateInputEmits,
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
