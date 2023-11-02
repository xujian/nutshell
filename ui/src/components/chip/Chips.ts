import { useFieldProps, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { LabelValuePair } from '../../shared/models'
import { PropType } from 'vue'

export const chipsProps = {
  ...useModelValuePropsForStringArray(),
  options: {
    type: Array as PropType<LabelValuePair[]>,
  },
  ...useVariantProps(),
  ...useSizeProps(),
  ...useFieldProps(),
}

export type ChipsProps = MakePropsType<typeof chipsProps>

/**
 * 标签条组 <ns-chips>
 */
export const NsChips = define({
    name: 'NsChips',
    props: chipsProps,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
      }
    }
  }
)
