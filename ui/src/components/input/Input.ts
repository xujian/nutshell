import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { FullValidationRule, PropsWithLabel, ValidationRule, formatRules } from '../../props/field'
import { EmitsToProps } from 'src/utils/private/helpers'

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

const inputEmits: InputEmits = {
  change: (value: string | number) => {}
}

export type InputProps = ExtractPublicPropTypes<typeof inputProps> & EmitsToProps<InputEmits>

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
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
