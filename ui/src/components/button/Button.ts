import { PropType } from 'vue'
import { useDesignProps, useSizeProps, useVariantProps,
  useDimensionProps, useLoadingProps, useHasIconProps } from '../../props'
import { type IconSlots } from '../../props'
import { define, MakePropsType } from '../../utils'
import { Color } from '../../composables/theme'
import { buildProps } from '../../utils/private/props'

export const useButtonProps = buildProps({
  /**
   * 显示的文字
   */
  label: {
    type: String
  },
  color: {
    type: String as PropType<Color>,
  },
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false
  },
  ...useSizeProps(),
})

console.log('===useWithIconProps', useHasIconProps)

const buttonProps = {
  ...useButtonProps(),
  ...useHasIconProps(),
  ...useDesignProps(),
  ...useDimensionProps(),
  ...useVariantProps(),
  ...useLoadingProps()
}

export type ButtonEmits = {
}

const emits: ButtonEmits = {
}

export type ButtonSlots = {
  default: never
} & IconSlots

export type ButtonProps = MakePropsType<typeof buttonProps, ButtonEmits>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define({
  name: 'NsButton',
  props: buttonProps,
  emits,
  setup (props) {
    // const $attrs = useAttrs()
    // console.log('===NsButton, props', props, $attrs)
    // 对参数做前期的处理
    return {
    }
  }
})
