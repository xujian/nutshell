import {
  PropType,
  useSlots,
} from 'vue'
import { MakePropsType, define } from '../../utils'
import { useModelValuePropsForInput, useSizeProps } from '../../props'

export type StepperVariant = 'arrow' | 'stone'

export type StepperDirection = 'horizontal' | 'vertical'

export type StepperStatus = 'wait' | 'process' | 'finish' | 'error' | undefined

export type StepItem = {
  description: {
    type: String
  }
  disabled: {
    type: Boolean
  }
  icon: {
    type: String
  }
  status: {
    type: StepperStatus
  }
  subTitle: {
    type: String
  }
  title: {
    type: String
  }
}

export const stepperProps = {
  status: {
    type: String as PropType<StepperStatus>,
    default: 'process'
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
  variant: {
    type: String as PropType<StepperVariant>,
    default: 'stone'
  },
  clickable: {
    type: Boolean,
    default: true
  },
  ...useSizeProps(),
  ...useModelValuePropsForInput()
}

export type StepperEmits = {
}

const stepperEmits: StepperEmits = {
}

export type StepsProps = MakePropsType<typeof stepperProps, StepperEmits>

export type StepsSlots = {
  default: () => any
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
    return {}
  }
})
