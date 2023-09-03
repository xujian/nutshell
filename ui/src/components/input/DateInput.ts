import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { usePlatform } from '../../composables'
import { useModelValuePropsForInput } from '../../props/model'
import { useFieldProps } from '../../props'

export const dateInputProps = {
  label: {
    type: String,
    required: false,
    default: ''
  },
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
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