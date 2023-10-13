import { h, Ref, ref, SetupContext } from 'vue'
import { Form as AntdvForm } from 'ant-design-vue'
import { FormProps } from '../../../../components'
import type { MarginProps } from '../../../../utils'

export const Form = (props: FormProps & MarginProps & { vendorRef?: Ref}, { slots }: SetupContext) => {

  console.log('_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_Form()', props.vendorRef)

  return h(AntdvForm, {
    ref: props.vendorRef,
    class: ['ns-form'].concat(props.classes),
    name: props.name,
    autocomplete: 'off',
    model: props.modelValue,
  }, slots)
}
// + import => ./index.ts, ../components.ts
