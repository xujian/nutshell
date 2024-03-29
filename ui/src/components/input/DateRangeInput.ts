import { ObjectEmitsOptions, PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { usePlatform } from '../../composables'
import { useFieldProps } from '../../props'

export type DateAsStringOrNumber = string | number

export type DateRange = [DateAsStringOrNumber, DateAsStringOrNumber]

export const dateRangeInputProps = {
  modelValue: {
    type: Array as unknown as PropType<DateRange>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string[]) => void>
  },
  disabledDate: {
    type: Function as PropType<(currentDate: DateRange) => boolean>
  },
  ...useFieldProps(),
  inside: {
    type: Boolean,
    default: false,
  }
}

export type DateRangeInputEmits = {
  change: (value?: string[]) => void
}

export const dataRangeInputEmits: DateRangeInputEmits = {
  change: (value?: string[]) => {}
}

export type DateRangeInputProps = MakePropsType<typeof dateRangeInputProps, DateRangeInputEmits>


/**
 * 时间区间输入框 <ns-date-range-input>
 */
export const NsDateRangeInput = define({
    name: 'NsDateRangeInput',
    props: dateRangeInputProps,
    emits: dataRangeInputEmits,
    setup (props, ctx) {
      const platform = usePlatform()
      return {
      }
    }
  }
)
