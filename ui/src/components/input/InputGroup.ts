import { define, MakePropsType } from '../../utils'
import { buildStyles } from '../../props/field'
import { inputEmits, InputEmits } from './Input'
import { PropType } from 'vue'
import { useSizeProps, useVariantProps } from '../../props'

export const inputGroupProps = {
  ...useVariantProps(),
  /**
   * 是否用紧凑模式
   */
  compact: {
    type: Boolean,
    default: true,
  },
  ...useSizeProps(),
}

export type InputGroupSlots = {
  /** 前缀 */
  prepend: never
  /** 后缀 */
  append: never
}

export type InputGroupProps = MakePropsType<typeof inputGroupProps, InputEmits>

/**
 * 输入框组合 <ns-input-group>
 */
export const NsInputGroup = define({
  name: 'NsInputGroup',
  props: inputGroupProps,
  emits: inputEmits,
  setup(props, ctx) {
    return {
      props: {
        style: buildStyles(props),
      }
    }
  }
})
