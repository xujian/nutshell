import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useDimensionProps, useFieldProps, useFlexProps, useModelValuePropsForString, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'
import { Color } from '../../composables/theme'

export const buttonGroupInputProps = {
  ...useModelValuePropsForStringArray(),
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
  },
  options: {
    type: Array as PropType<UniDataItem[]>,
    default: []
  },
  ...useModelValuePropsForString(),
  selectable: {
    type: Boolean,
    default: true,
  },
  ...useFieldProps(),
  ...useVariantProps(),
  ...useDesignProps(),
  ...useFlexProps(),
  ...useDimensionProps(),
  ...useSizeProps(),
}

export type ButtonGroupInputEmits = {
  change: (value: string) => void
}

const buttonGroupInputEmits: ButtonGroupInputEmits = {
  change: (value: string) => true
}

export type ButtonGroupInputSlots = {
  default: never,
}

export type ButtonGroupInputProps = MakePropsType<typeof buttonGroupInputProps, ButtonGroupInputEmits>

/**
 * 按钮组 form 组件 <ns-button-group>
 */
export const NsButtonGroupInput = define({
  name: 'NsButtonGroupInput',
  props: buttonGroupInputProps,
  emits: buttonGroupInputEmits,
  setup (props, { emit }) {
    return {
      props: {
      }
    }
  }
})
