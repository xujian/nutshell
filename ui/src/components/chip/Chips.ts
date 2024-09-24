import { useDesignProps, useFieldProps, useFlexProps, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'
import { PropType } from 'vue'
import { FullValidationRule, ValidationRule, formatRules } from '../../props/field'
import { Color } from '../../composables'

export const chipsProps = {
  ...useModelValuePropsForStringArray(),
  color: {
    type: String as PropType<Color>,
  },
  items: {
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

export type ChipsProps = MakePropsType<typeof chipsProps>

/**
 * 标签条组 <ns-chips>
 */
export const NsChips = define({
    name: 'NsChips',
    props: chipsProps,
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
