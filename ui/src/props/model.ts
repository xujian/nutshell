import { PropType, computed, ref } from 'vue'
import { buildProps } from '../utils/private/props'

type ModelModifiers = Record<string, boolean>

export type ModelValueProps<T = any> = {
  modelValue: T
}

export const useModelValuePropsForString = buildProps({
  modelValue: {
    type: String
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string) => void>
  },
  modelModifiers: {
    type: Object as PropType<ModelModifiers>,
    default: () => ({})
  }
})

export const useModelValuePropsForBoolean = buildProps({
  modelValue: {
    type: Boolean
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: boolean) => void>
  },
  modelModifiers: {
    type: Object as PropType<ModelModifiers>,
    default: () => ({})
  }
})

export const useModelValuePropsForInput = buildProps({
  modelValue: {
    type: [Number, String],
    default: undefined
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | string) => void>
  },
  modelModifiers: {
    type: Object as PropType<ModelModifiers>,
    default: () => ({})
  }
})

export const useModelValuePropsForStringArray = buildProps({
  modelValue: {
    type: Array as PropType<string[]>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string[]) => void>
  }
})
