import { ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { useModelValuePropsForBoolean, useVariantProps } from '../../props'

export const checkboxProps = {
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
  },
  shape: {
    type: String as PropType<'round' | 'button'>,
    default: 'round'
  },
  textPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  ...useModelValuePropsForBoolean(),
  ...useVariantProps(),
}

export type CheckboxEmits = {
}

const emits: CheckboxEmits = {
}

export interface CheckboxSlots extends SlotsType {
  default: never,
}

export type CheckboxProps = MakePropsType<typeof checkboxProps, CheckboxEmits>

/**
 * 复选框组件 <ns-checkbox>
 */
export const NsCheckbox = define({
  name: 'NsCheckbox',
  props: checkboxProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
