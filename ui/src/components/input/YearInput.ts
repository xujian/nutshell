import { define } from '../../utils'
import { usePlatform } from '../../composables'
import { dateInputProps, DateInputEmits } from './DateInput'

const emits: DateInputEmits = {
  change: (value: string | number) => {}
}

/**
 * 年份选择框 <ns-year-input>
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
