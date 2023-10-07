import { h } from 'vue'
import { InputProps, NsInput } from './Input'

const defaultProps = {
  maxlength: 18,
  rules: ['id']
}


/**
 * 证件号输入框 <ns-id-input>
 */
export const NsIdInput = (props: InputProps) => {
  return h(NsInput, {
    ...defaultProps,
    ...props
  })
}
