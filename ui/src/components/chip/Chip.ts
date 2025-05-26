import { PropType } from 'vue'
import { buildProps } from '../../utils/private/props'
import { Color } from '../../composables'
import { IconPosition, useDesignProps, useHasIconProps, useSizeProps, useVariantProps } from '../../props'
import { MakePropsType, define } from '../../utils'

export const useChipProps = buildProps({
  /**
   * 文字
   */
  label: {
    type: String,
  },
  value: {
    type: String,
  },
  /**
   * 底色
   */
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  /**
   * 带关闭
   */
  closable: {
    type: Boolean
  },
  ...useSizeProps(),
  ...useVariantProps(),
  ...useDesignProps(),
  ...useHasIconProps(),
})

export const chipProps = {
  ...useChipProps(),
  ...useSizeProps(),
}

export type ChipEmits = {
}

export const chipEmits: ChipEmits = {
}

export type ChipProps = MakePropsType<typeof chipProps, ChipEmits>

/**
 * 标签条 <ns-chip>
 */
export const NsChip = define({
    name: 'NsChip',
    props: chipProps,
    emits: chipEmits,
    setup (props, ctx) {
      return {
        props: {
          fill: props.fill || props.color
        }
      }
    }
  }
)
