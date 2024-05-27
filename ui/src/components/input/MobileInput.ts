import { h } from 'vue'
import { InputProps, NsInput } from './Input'
import { ValidationRule } from '../../props/field'

const defaultProps = {
  maxlength: 11,
  rules: ['mobile']
}

/**
 * 手机号输入框 <ns-mobile-input>
 */
export const NsMobileInput = (props: InputProps) => {
  const rules: ValidationRule[] = [
    ...props.rules || [],
    ...defaultProps.rules
  ]
  return h(NsInput, {
    ...props,
    maxlength: defaultProps.maxlength,
    rules
  })
}
