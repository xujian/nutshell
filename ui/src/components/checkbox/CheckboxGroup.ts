import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'
import { define } from '../../utils'

export type CheckboxGroupOption = {
  label: string,
  value: string
}

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: []
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string[]) => void>
  },
  options: {
    type: Array as PropType<CheckboxOption[]>,
  }
}

export type CheckboxGroupProps = ExtractPublicPropTypes<typeof checkboxGroupProps>

export interface CheckboxGroupEmits extends ObjectEmitsOptions {
}

const emits: CheckboxGroupEmits = {
}

export interface CheckboxGroupSlots extends SlotsType {
  default: never,
}

/**
 * 复选框组 <ns-checkbox-group>
 */
export const NsCheckboxGroup = define({
  name: 'NsCheckboxGroup',
  props: checkboxGroupProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts