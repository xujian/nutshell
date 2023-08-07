import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'

/**
 * 输入框类型
 */
export type InputType = 'text'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local'

const props = {
  type: {
    type: String as PropType<InputType>,
    required: false,
    default: 'text'
  },
  label: {
    type: String,
    required: false,
    default: ''
  }
}

export interface InputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type InputProps = ExtractPublicPropTypes<typeof props>


/**
 * 输入框 <ns-input>
 */
export const NsInput = define({
    name: 'NsInput',
    props,
    emits,
    setup (props, ctx) {
      return {
        props
      }
    }
  }
)