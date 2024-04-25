import { h, SetupContext } from 'vue'
import { FormItem as AntFormItem } from 'ant-design-vue'
import { DisplayProps } from '../../../../components'

export const Display = (props: DisplayProps, ctx: SetupContext) => {

  return h(AntFormItem,
    {
      class: [
        'ns-form-item',
      ],
      label: props.label,
    },
    {
      default: props.value,
    }
  )
}
// + import => ./index.ts, ../components.ts
