import { buildProps } from '../../utils/private/props'
import { Color } from '../../composables'
import { useSizeProps } from '../../props'
import { define } from '../../utils'
import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ComponentObjectPropsOptions } from 'vue'

/**
 * 按钮类型
 */
export type ChipType = 'default' 
  | 'primary'
  | 'info' 
  | 'warning'
  | 'danger'
  | 'success'

export const useChipProps = buildProps({
  type: {
    type: String as PropType<ChipType>,
  },
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
})

const props = {
  ...useChipProps(),
  ...useSizeProps(),
}

export type ChipProps = ExtractPublicPropTypes<typeof props>

/**
 * 标签条 <ns-chip>
 */
export const NsChip = define({
    name: 'NsChip',
    props,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
      }
    }
  }
)
