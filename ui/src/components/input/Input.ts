import type { ObjectEmitsOptions, PropType, SlotsType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { FullValidationRule, ValidationRule, buildStyles, formatRules } from '../../props/field'

/**
 * 输入框类型
 */
export type InputType =
  | 'text'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local'

export const inputProps = {
  type: {
    type: String as PropType<InputType>,
    required: false,
    default: 'text'
  },
  /**
   * 最大长度
   */
  maxlength: {
    type: Number
  },
  /**
   * 是否展示字数
   */
  hasCount: {
    type: Boolean,
    default: false
  },
  /**
   * 显示清空按钮
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  lazy: {
    type: Boolean,
    default: true
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps()
}

export type InputEmits = {
  change: (value?: string | number) => void
  blur: () => void
  focus: () => void
  keyup: (code: string) => void
  enter: () => void
}

export const inputEmits: InputEmits = {
  change: (value?: string | number) => {},
  blur: () => {},
  focus: () => {},
  keyup: (code: string) => {},
  enter: () => {},
}

export type InputSlots = {
  /** 前缀 */
  prepend: never
  /** 后缀 */
  append: never
}

export type InputProps = MakePropsType<typeof inputProps, InputEmits>

/**
 * 输入框 <ns-input>
 */
export const NsInput = define({
  name: 'NsInput',
  props: inputProps,
  emits: inputEmits,
  setup(props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        style: buildStyles(props),
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
