import { buildProps } from '../../utils/private/props'
import { Color } from '../../composables'
import { useSizeProps, useVariantProps } from '../../props'
import { define } from '../../utils'
import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ComponentObjectPropsOptions } from 'vue'

export const useChipProps = buildProps({
  /**
   * 文字
   */
  label: {
    type: String,
  },
  /**
   * 底色
   */
  color: {
    type: String as PropType<Color>,
  },
  /**
   * 字色
   */
  textColor: {
    type: String as PropType<Color>,
  },
  ...useSizeProps(),
  ...useVariantProps()
})

export const chipProps = {
  ...useChipProps(),
  ...useSizeProps(),
}

export interface ChipEmits extends ObjectEmitsOptions {
  click (): void,
}

export const chipEmits: ChipEmits = {
  click () {},
}

export type ChipProps = ExtractPublicPropTypes<typeof chipProps>

/**
 * 标签条 <ns-chip>
 */
export const NsChip = define({
    name: 'NsChip',
    props: chipProps,
    emits: chipEmits,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
      }
    }
  }
)
