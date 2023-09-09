import { PropType, computed } from 'vue'
import { buildProps } from '../utils/private/props'

export type ModelValueProps<T = any> = {
  modelValue: T,
}

export const useModelValuePropsForBoolean = buildProps({
  modelValue: {
    type: Boolean,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: boolean) => void>,
  }
})

export const useModelValuePropsForInput = buildProps({
  modelValue: {
    type: [Number, String],
    default: '',
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | string) => void>,
  }
})
