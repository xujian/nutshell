import { h, SetupContext } from 'vue'
import { Form as AntdvForm } from 'ant-design-vue'
import { FormProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import type { MarginProps } from '../../../../utils'

export const Form = (props: FormProps & MarginProps, { slots }: SetupContext) => {

  return h(AntdvForm, {
    class: 'ns-form',
    name: props.name,
    modelValue: props.modelValue,
    'oUpdate:modelValue': (value: any) => {
      props['onUpdate:modelValue']?.(value)
    }
  }, slots)
}
// + import => ./index.ts, ../components.ts
