import { define } from '../../utils'
import { usePlatform } from '../../composables'
import { dateInputProps, DateInputEmits } from './DateInput'

const emits: DateInputEmits = {
  change: (value: string | number) => {}
}

/**
 * 输入框 <ns-date-input>
 */
export const NsYearInput = define({
    name: 'NsYearInput',
    props: dateInputProps,
    emits,
    setup (props, ctx) {
      const platform = usePlatform()
      return {
      }
    }
  }
)
