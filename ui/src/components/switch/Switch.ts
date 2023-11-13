import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean } from '../../props'

export const Props = {
    // antd/nutui支持string和number，但我觉得没必要，布尔值就可以了
    ...useModelValuePropsForBoolean(),
    disabled: {
        type: Boolean,
        default: false,
    },
    // TODO -- nico 这块size有待商榷
    // size: 'default' | 'small'
}

export interface SwitchEmits extends ObjectEmitsOptions {
    'change': (checked: boolean, event: Event) => void
}

const emits: SwitchEmits = {
    'change': (checked: boolean, event: Event) => void 0
}

export interface SwitchSlots extends SlotsType {
    default: never,
}

export type SwitchProps = MakePropsType<typeof Props, SwitchEmits>

/**
 * Switch 组件 <ns-switch>
 */
export const NsSwitch = define({
    name: 'NsSwitch',
    props: Props,
    emits,
    setup (props, ctx) {
        // console.log('components/switch', props)
        return {
        }
    }
})
// 需要增加 import 到 ./index.ts, ../components.ts