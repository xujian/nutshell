import { ObjectEmitsOptions, PropType } from 'vue'
import { Dayjs } from 'dayjs'
import { MakePropsType, define } from '../../utils'
import { usePlatform } from '../../composables'
import { useFieldProps } from '../../props'

export const dateInputProps = {
  modelValue: {
    type: String,
    default: '',
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string) => void>,
  },
  disabledDate: {
    type: Function as PropType<(currentDate: Dayjs) => boolean>
  },
  ...useFieldProps(),
}

export interface DateInputEmits extends ObjectEmitsOptions {
  change: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type DateInputProps = MakePropsType<typeof dateInputProps, DateInputEmits>


/**
 * 输入框 <ns-date-input>
 */
export const NsDateInput = define({
    name: 'NsDateInput',
    props: dateInputProps,
    emits,
    setup (props, ctx) {
      const platform = usePlatform()
      console.log('DateInput.ts................platform:', platform)
      return {
      }
    }
  }
)
