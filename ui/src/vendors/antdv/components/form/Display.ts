import { h, SetupContext } from 'vue'
import { FormItem as AntFormItem } from 'ant-design-vue'
import { DisplayProps } from '../../../../components'

export const Display = (props: DisplayProps, { slots }: SetupContext) => {

  return h(AntFormItem,
    {
      class: [
        'ns-form-item',
      ],
      label: props.label,
    },
    {
      default: () => slots.default
        ? slots.default()
        : props.value
    }
  )
}
