import { h, Ref, ref, SetupContext } from 'vue'
import { Form as AntdvForm } from 'ant-design-vue'
import { FormProps } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Form = (props: FormProps & MarginProps, { slots }: SetupContext) => {

  return h(AntdvForm, {
    ref: props.vendorRef,
    class: [
    ],
    name: props.name,
    autocomplete: 'off',
    model: props.modelValue,
  }, slots)
}

