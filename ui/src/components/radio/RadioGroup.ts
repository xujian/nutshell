import { PropType, useSlots } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps, useFlexProps } from '../../props'
import { UniDataItem } from '../../shared'
import { ValidationRule, formatRules } from '../../props/field'

export const radioGroupProps = {
  ...useModelValuePropsForInput(),
  options: {
    type: Array as PropType<UniDataItem[]>,
    default: []
  },
  ...useFieldProps(),
  ...useFlexProps(),
  ...useVariantProps(),
}

export type RadioGroupEmits = {
  change: (value: string | number ) => void
}

const radioGroupEmits: RadioGroupEmits = {
  change: (value: string | number ) => {}
}

export type RadioGroupSlots = {
  default: never,
}

export type RadioGroupProps = MakePropsType<typeof radioGroupProps, RadioGroupEmits>

/**
 * 单选框组组件 <ns-radio-group>
 */
export const NsRadioGroup = define({
  name: 'NsRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,
  // @ts-ignore
  setup (props, ctx) {
    const rules = formatRules(props.rules as ValidationRule[], props)

    // 从子组件读取 options
    const { default: defaultSlot } = useSlots(),
      slots = defaultSlot && defaultSlot()
    // 这里的逻辑
    // 当使用子组件(ns-radio)时，options 属性自动失效
    const options = slots
      && slots.length
      && slots.map(slot => ({
          name: props.name,
          label: slot.props?.label,
          value: slot.props?.value,
        }))

    return {
      props: {
        // 这样写是为了避免用 undefine 覆盖掉原值 丢失 reactive
        ...options && { options },
        rules
      }
    }
  }
})
