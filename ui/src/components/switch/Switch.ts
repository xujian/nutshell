import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForBoolean, useSizeProps } from '../../props'

export const switchProps = {
  ...useModelValuePropsForBoolean(),
  disabled: {
    type: Boolean,
    default: false,
  },
  ...useSizeProps(),
}

export type SwitchEmits = {
  change: (checked: boolean, event: Event) => void
}

const emits: SwitchEmits = {
  change: (checked: boolean, event: Event) => void 0
}

export type SwitchSlots = {
  default: never,
}

export type SwitchProps = MakePropsType<typeof switchProps, SwitchEmits>

/**
 * 开关组件 <ns-switch>
 */
export const NsSwitch = define({
  name: 'NsSwitch',
  props: switchProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
