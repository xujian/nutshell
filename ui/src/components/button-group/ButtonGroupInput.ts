import { PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useDesignProps, useDimensionProps, useFieldProps, useFlexProps, useModelValuePropsForString, useSizeProps, useVariantProps } from '../../props'
import { UniDataItem } from '../../shared'

export const buttonGroupInputProps = {
  ...useModelValuePropsForString(),
  /**
   * 按钮底色
   */
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

export const buttonGroupInputEmits: ButtonGroupInputEmits = {
  change: (value: string) => true
}

export type ButtonGroupInputSlots = {
  default: never,
}

export type ButtonGroupInputProps = MakePropsType<typeof buttonGroupInputProps, ButtonGroupInputEmits>

/**
 * 按钮组输入组件 <ns-button-group-input>
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
