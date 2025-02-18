import { PropType, ObjectEmitsOptions, SlotsType, ref } from 'vue'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'
import { useFieldProps, useModelValuePropsForStringArray, useVariantProps, useFlexProps, formatRules, ValidationRule } from '../../props'

export const checkboxGroupProps = {
  ...useModelValuePropsForStringArray(),
  options: {
    type: Array as PropType<UniDataItem[]>,
  },
  max: {
    type: Number,
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
    const vendorRef = ref()
    const rules = formatRules(props.rules as ValidationRule[], props)

    // 复选框反选
    function toggleReverse () {
      return vendorRef.value.toggleReverse()
    }
    // 全选、全不选操作
    function toggleAll(value: Boolean){
      return vendorRef.value.toggleAll(value)
    }

    return {
      methods: {
        toggleReverse,
        toggleAll
      },
      props: {
        rules,
      },
      vendorRef
    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
