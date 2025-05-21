import { useDesignProps, useFlexProps, useModelValuePropsForStringArray, useSizeProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'
import { UniDataItem } from '../../shared'
import { PropType } from 'vue'
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
  /**
   * 字色
   */
  textColor: {
    type: String as PropType<Color>,
  },
  ...useVariantProps(),
  ...useSizeProps(),
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
      return {
        props: {
        }
      }
    }
  }
)
