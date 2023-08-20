import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { usePlatform } from '../../composables'

const props = {
  label: {
    type: String,
    required: false,
    default: ''
  }
}

export interface DateInputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type DateInputProps = ExtractPublicPropTypes<typeof props>


/**
 * 输入框 <ns-date-input>
 */
export const NsDateInput = define({
    name: 'NsDateInput',
    props,
    emits,
    setup (props, ctx) {
      const platform = usePlatform()
      console.log('DateInput.ts................platform:', platform)
      return {
        props
      }
    }
  }
)