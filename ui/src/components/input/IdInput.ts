import { h } from 'vue'
import { InputProps, NsInput } from './Input'
import { ValidationRule } from '../../props/field'

const defaultProps = {
  maxlength: 18,
  rules: ['id']
}


/**
 * 证件号输入框 <ns-id-input>
 */
export const NsIdInput = (props: InputProps) => {
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
