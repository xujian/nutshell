import { PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { useFieldProps, useSizeProps } from '../../props'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'

export const ratingInputProps = {
  modelValue: {
    type: Number,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | string) => void>
  },
  ...useSizeProps(),
  ...useFieldProps(),
}

export type RatingInputEmits = {
}

const emits: RatingInputEmits = {
}

export type RatingInputSlots = {
  default: never,
}

export type RatingInputProps = MakePropsType<typeof ratingInputProps, RatingInputEmits>

/**
 * Rating表单组件 <ns-rating-input>
 */
export const NsRatingInput = define({
  name: 'NsRatingInput',
  props: ratingInputProps,
  emits,
  setup (props, ctx) {
    const finalRules = formatRules(props.rules as ValidationRule[], props)
    return {
      props: {
        rules: finalRules as FullValidationRule[]
      }
    }
  }
})
