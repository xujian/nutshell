import { PropType, ExtractPublicPropTypes, SlotsType, useSlots, VNode, RendererNode, RendererElement } from 'vue'
import { define } from '../../utils'
import { useModelValuePropsForInput } from '../../props'

export type StepperSize = 'default' | 'small' | undefined

export type StepperDirection = 'horizontal' | 'vertical'

export type StepperStatus = 'wait' | 'process' | 'finish' | 'error' | undefined

export type StepItem = {
  description: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  icon: {
    type: String
  },
  status: {
    type: StepperStatus,
  },
  subTitle: {
    type: String
  },
  title: {
    type: String
  },
}

export const stepperProps = {
  status: {
    type: String as PropType<StepperStatus>,
    default: 'process'
  },
  size: {
    type: String as PropType<StepperSize>,
    default: 'default'
  },
  direction: {
    type: String as PropType<StepperDirection>,
    default: 'horizontal'
  },
  labelPlacement: {
    type: String as PropType<StepperDirection>,
    default: 'horizontal'
  },
  items: {
    type: Array as PropType<StepItem[]>,
    default: []
  },
  ...useModelValuePropsForInput()
}

export type StepsProps = ExtractPublicPropTypes<typeof stepperProps>

export type StepperEmits = {
  'update:modelValue': (value: boolean) => void,
}

const stepperEmits: StepperEmits = {
  'update:modelValue': (value: boolean) => void 0,
}

export type StepsSlots = {
  default: () => any,
}

// @ts-ignore
const stepSlots = () => {
  const { default: defaultSlot } = useSlots()
  if (!defaultSlot) return []
  const slots = defaultSlot()
  return slots
}

/**
 * Stepper 组件 <ns-stepper>
 */
export const NsStepper = define({
  name: 'NsStepper',
  props: stepperProps,
  emits: stepperEmits,
  // @ts-ignore
  setup (props) {
    return {

    }
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
