import { ExtractPublicPropTypes, PropType } from 'vue'
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

const inputProps = {
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

export type InputProps = ExtractPublicPropTypes<typeof inputProps>


/**
 * 输入框 <ns-input>
 */
export const NsInput = define<InputProps>(
  (props, {slots, emit, attrs}) => {
    return {
      ...props,
    }
  }, {
    name: 'NsInput',
    emits: ['change', 'focus'],
  }
)