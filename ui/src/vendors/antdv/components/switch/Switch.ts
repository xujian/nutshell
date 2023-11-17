import { h, SetupContext } from 'vue'
import { Switch as AntdvSwitch } from 'ant-design-vue'
import { SwitchProps } from '../../../../components'

export const Switch = (props: SwitchProps, ctx: SetupContext) => {
    // console.log('vendors/switch', props)

    return h(AntdvSwitch, {
        class: 'ns-switch',
        checked: props.modelValue,
        disabled: props.disabled,
        size: props.size,
        'onUpdate:checked': (value: boolean | string | number) => {
            if (typeof value === 'boolean') {
                props['onUpdate:modelValue']?.(value as boolean)
            } else {
                throw new Error('请使用Boolean值绑定')
            }
        }
    }, () => '')
}
// + import => ./index.ts, ../components.ts
