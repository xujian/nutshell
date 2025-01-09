import { h, SetupContext } from 'vue'
import { SwitchProps } from '../../../../components/switch'

export const Switch = (props: SwitchProps, ctx: Omit<SetupContext, 'expose'>) => {

  return h(NutSwitch, {
    modelValue: props.modelValue,
    disabled: props.disabled,
    size: props.size === 'xs' ? 'small' : 'default',
    'onUpdate:modelValue': (value: boolean | string | number) => {
      props['onUpdate:modelValue']?.(value as boolean)
    }
  })
}
