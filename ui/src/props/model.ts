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
    required: false,
    default: void 0
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | string | undefined) => void>
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

export const useModelValuePropsForArray = buildProps({
  modelValue: {
    type: Array as PropType<any[]>
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: any[]) => void>
  }
})
