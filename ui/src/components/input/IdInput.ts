import { h } from 'vue'
import { NsInput } from './Input'
import { InputProps } from 'ant-design-vue'

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
