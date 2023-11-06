import { ObjectEmitsOptions, PropType } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { FullValidationRule, ValidationRule, buildStyles, formatRules } from '../../props/field'

/**
 * 输入框类型
 */
export type InputType = 
  'text'
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
   * 
   */
  maxlength: {
    type: Number,
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
}

export interface InputEmits extends ObjectEmitsOptions {
  change: (value: string | number) => void
}

export const inputEmits: InputEmits = {
  change: (value: string | number) => true
}

export type InputProps = MakePropsType<typeof inputProps, InputEmits>

/**
 * 输入框 <ns-input>
 */
export const NsInput = define({
    name: 'NsInput',
    props: inputProps,
    emits: inputEmits,
    setup (props, ctx) {
      const finalRules = formatRules(props.rules as ValidationRule[], props)
      return {
        props: {
          style: buildStyles(props),
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
