import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useFieldProps, useModelValuePropsForBoolean, useSizeProps } from '../../props'

export const switchInputProps = {
  ...useModelValuePropsForBoolean(),
  ...useFieldProps(),
  ...useSizeProps(),
}

export type SwitchInputEmits = {
  change: (checked: boolean, event: Event) => void
}

const emits: SwitchInputEmits = {
  change: (checked: boolean, event: Event) => void 0
}

export type SwitchInputSlots = {
  default: never,
}

export type SwitchInputProps = MakePropsType<typeof switchInputProps, SwitchInputEmits>

/**
 * 开关组件 <ns-switch-input>
 */
export const NsSwitchInput = define({
  name: 'NsSwitchInput',
  props: switchInputProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
