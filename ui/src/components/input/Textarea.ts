import { define, MakePropsType } from '../../utils'
import { useFieldProps, useModelValuePropsForInput, useVariantProps } from '../../props'
import { FullValidationRule, ValidationRule, buildStyles, formatRules } from '../../props/field'
import { PropType } from 'vue'

export type AutoSizeType = Boolean | Object

export const textareaProps = {
  maxlength: {
    type: Number
  },
  hasCount: {
    type: Boolean,
    default: false
  },
  autoSize: {
    type: Boolean as PropType<AutoSizeType> | Object as PropType<AutoSizeType>,
    default: false
  },
  rows: {
    type: Number,
    default: 2
  },
  lazy: {
    type: Boolean,
    default: true
  },
  ...useVariantProps(),
  ...useModelValuePropsForInput(),
  ...useFieldProps()
}

export type TextareaEmits = {
  change: (value?: string | number) => void
  blur: (value?: string | number) => void
  focus: (value?: string | number) => void
}

export const textareaEmits: TextareaEmits = {
  change: (value?: string | number) => void 0,
  blur: (value?: string | number) => void 0,
  focus: (value?: string | number) => void 0
}

export type TextareaProps = MakePropsType<typeof textareaProps, TextareaEmits>

/**
 * 输入框 <ns-textarea>
 */
export const NsTextarea = define({
  name: 'NsTextarea',
  props: textareaProps,
  emits: textareaEmits,
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
