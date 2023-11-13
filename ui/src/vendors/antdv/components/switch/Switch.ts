import { h, SetupContext } from 'vue'
import { Switch as AntdvSwitch } from 'ant-design-vue'
import { SwitchProps } from '../../../../components'

export const Switch = (props: SwitchProps, ctx: SetupContext) => {
    // console.log('vendors/switch', props)

    return h(AntdvSwitch, {
        class: 'ns-switch',
        checked: props.modelValue,
        disabled: props.disabled,
        'onUpdate:checked': (value: boolean) => {
            props['onUpdate:modelValue']?.(value)
        }
    }, () => '')
}
// + import => ./index.ts, ../components.ts
