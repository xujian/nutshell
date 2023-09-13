import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { FullValidationRule, PropsWithLabel, ValidationRule, formatRules } from '../../props/field'

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
  maxlength: {
    type: Number,
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps(),
}

export interface InputEmits extends ObjectEmitsOptions {
  change?: (value: string | number) => void
}

const emits = {
  change: (value: string | number) => {}
}

export type InputProps = ExtractPublicPropTypes<typeof inputProps>

/**
 * 输入框 <ns-input>
 */
export const NsInput = define({
    name: 'NsInput',
    props: inputProps,
    emits,
    setup (props, ctx) {
      const finalRules = formatRules(props.rules as ValidationRule[], props as PropsWithLabel)
      console.log('INput.tes.......1.', finalRules)
      return {
        props: {
          name: props.name,
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
