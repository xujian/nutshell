import { h, SetupContext } from 'vue'
import { Switch as AntdvSwitch } from 'ant-design-vue'
import { SwitchProps } from '../../../../components'

export const Switch = (props: SwitchProps, ctx: SetupContext) => {

  return h(AntdvSwitch, {
    checked: props.modelValue,
    disabled: props.disabled,
    size: props.size === 'xs' ? 'small' : 'default',
    'onUpdate:checked': (value: boolean | string | number) => {
      props['onUpdate:modelValue']?.(value as boolean)
    }
  }, () => '')
}
