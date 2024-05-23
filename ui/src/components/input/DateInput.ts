import { ObjectEmitsOptions, PropType } from 'vue'
import { Dayjs } from 'dayjs'
import { MakePropsType, define } from '../../utils'
import { usePlatform } from '../../composables'
import { FullValidationRule, ValidationRule, formatRules, useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'

export type HasTimeType = Boolean | Object

export const dateInputProps = {
  ...useModelValuePropsForInput(),
  disabledDate: {
    type: Function as PropType<(currentDate: Dayjs) => boolean>
  },
  hasTime: {
    type: Boolean as PropType<HasTimeType> | Object as PropType<HasTimeType>
  },
  format: {
    default: 'YYYY-MM-DD'
  },
  hasNow: {
    type: Boolean,
    default: true
  },
  disabledTime: {
    type: Function as PropType<(date: Dayjs) => {}>
  },
  ...useFieldProps(),
  ...useVariantProps(),
}

export type DateInputEmits = {
  change: (value: string | number) => void
}

const emits: DateInputEmits = {
  change: (value: string | number) => {}
}

export type DateInputProps = MakePropsType<typeof dateInputProps, DateInputEmits>


/**
 * 日期选择组件 <ns-date-input>
 */
export const NsDateInput = define({
    name: 'NsDateInput',
    props: dateInputProps,
    emits,
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
