import { PropType, ObjectEmitsOptions, SlotsType, useSlots } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForInput, useLayoutProps } from '../../props'
import { RadioProps } from './Radio'

export type RadioITem = {
  label: string,
  value: string | number
}

export const radioGroupProps = {
  ...useModelValuePropsForInput(),
  name: {
    type: String,
  },
  label: {
    type: String
  },
  items: {
    type: Array as PropType<RadioITem[]>,
    default: []
  },
  ...useLayoutProps(),
}

export interface RadioGroupEmits extends ObjectEmitsOptions {
  change: (value: string | number ) => void
}

const radioGroupEmits: RadioGroupEmits = {
  change: (value: string | number ) => {}
}

export interface RadioGroupSlots extends SlotsType {
  default: never,
}

export type RadioGroupProps = MakePropsType<typeof radioGroupProps, RadioGroupEmits>

/**
 * 单选框组件 <ns-radio-group>
 */
export const NsRadioGroup = define({
  name: 'NsRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup (props, ctx) {
    // 从子组件读取 items 
    const { default: defaultSlot } = useSlots(),
      slots = defaultSlot && defaultSlot()
    // 这里的逻辑
    // 当使用子组件(ns-radio)时，items 属性自动失效
    const items = slots && slots.length
      ? slots.map(slot => ({
          name: props.name,
          label: slot.props?.label,
          value: slot.props?.value,
        }))
      : props.items
    return {
      props: {
        items
      }
    }
  }
})
