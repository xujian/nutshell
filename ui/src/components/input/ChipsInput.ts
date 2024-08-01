import { useDesignProps, useFieldProps, useFlexProps, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'
import { PropType } from 'vue'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'
import { Color } from '../../composables'

export const chipsInputProps = {
  ...useModelValuePropsForStringArray(),
  color: {
    type: String as PropType<Color>,
  },
  options: {
    type: Array as PropType<UniDataItem[]>,
    default: [],
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
  ...useVariantProps(),
  ...useSizeProps(),
  ...useFieldProps(),
  ...useFlexProps(),
  ...useDesignProps(),
}

export type ChipsInputProps = MakePropsType<typeof chipsInputProps>

/**
 * 标签条组输入框 <ns-chips-input>
 */
export const NsChipsInput = define({
    name: 'NsChipsInput',
    props: chipsInputProps,
    setup (props, ctx) {
      const finalRules = formatRules(props.rules as ValidationRule[], props)
      // 对参数做前期的处理
      return {
        props: {
          rules: finalRules as FullValidationRule[]
        }
      }
    }
  }
)
