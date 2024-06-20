import { h, SetupContext } from 'vue'
import { Form as NutuiForm } from '@nutui/nutui-taro'
import { FormProps } from '../../../../components'

export const Form = (props: FormProps, ctx: Omit<SetupContext, 'expose'>) => {

  return h(NutuiForm, {
    class: 'ns-form',
  }, ctx.slots)
}
