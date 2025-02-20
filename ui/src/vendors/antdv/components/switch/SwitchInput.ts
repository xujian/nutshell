import { h, SetupContext } from 'vue'
import { SwitchProps } from '../../../../components/switch'
import { renderFormItem } from '../../utils'
import { Switch as AntdvSwitch } from 'ant-design-vue'

export const SwitchInput = (props: SwitchProps, ctx: Omit<SetupContext, 'expose'>) => {

  return renderFormItem(
      {
        ...props,
      },
      ctx.slots,
      () => h(AntdvSwitch, {
        class: 'ns-switch',
        checked: props.modelValue,
        disabled: props.disabled,
        size: props.size === 'xs' ? 'small' : 'default',
        'onUpdate:checked': (value: boolean | string | number) => {
          props['onUpdate:modelValue']?.(value as boolean)
        }
      })
    )
}
