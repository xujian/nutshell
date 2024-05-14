import { define } from '../../utils'
import { usePlatform } from '../../composables'
import { dateInputProps, DateInputEmits } from './DateInput'

const emits: DateInputEmits = {
  change: (value: string | number) => {}
}

/**
 * 月份选择框 <ns-month-input>
 */
export const NsMonthInput = define({
    name: 'NsMonthInput',
    props: dateInputProps,
    emits,
    setup (props, ctx) {
      const platform = usePlatform()
      return {
      }
    }
  }
)
