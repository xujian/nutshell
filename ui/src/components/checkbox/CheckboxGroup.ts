import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'
import { useFieldProps, useModelValuePropsForStringArray, useVariantProps, useFlexProps, formatRules, ValidationRule } from '../../props'

export const checkboxGroupProps = {
  ...useModelValuePropsForStringArray(),
  options: {
    type: Array as PropType<UniDataItem[]>,
  },
  items: {
    type: Array as PropType<UniDataItem[]>,
  },
  ...useFieldProps(),
  ...useFlexProps(),
  ...useVariantProps(),
}

export type CheckboxGroupEmits = {
  change: (value: string[] | number[] ) => void
}

const emits: CheckboxGroupEmits = {
  change: (value: string[] | number[] ) => {}
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
    const rules = formatRules(props.rules as ValidationRule[], props)

    return {
      props: {
        rules,
      }
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
