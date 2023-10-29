import { h } from 'vue'
import { InputProps, InputType, NsInput } from './Input'

const defaultProps: Partial<InputProps> = {
  type: 'number',
  maxlength: 11,
  rules: ['mobile']
}


/**
 * 手机号输入框 <ns-mobile-input>
 */
export const NsMobileInput = (props: InputProps) => {
  return h(NsInput, {
    ...defaultProps,
    ...props
  })
}
