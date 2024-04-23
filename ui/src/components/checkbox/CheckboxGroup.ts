import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: []
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string[]) => void>
  },
  options: {
    type: Array as PropType<UniDataItem[]>,
  }
}

export type CheckboxGroupEmits = {
}

const emits: CheckboxGroupEmits = {
}

export type CheckboxGroupSlots = {
  default: never,
}

export type CheckboxGroupProps = MakePropsType<typeof checkboxGroupProps, CheckboxGroupEmits>

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
