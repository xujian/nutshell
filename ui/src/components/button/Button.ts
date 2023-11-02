import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { useSizeProps, useVariantProps } from '../../props'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps } from '../../props'
import { Color } from '../../composables/theme'

export const useButtonProps = () => ({
  /**
   * 显示的文字
   */
  label: {
    type: String,
  },
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
  },
  icon: {
    type: String
  },
  ...useSizeProps(),
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
})

const buttonProps = {
  ...useButtonProps(),
  ...useDimensionProps(),
  ...useVariantProps(),
}

export interface ButtonEmits extends ObjectEmitsOptions {
  click: () => void
}

const emits: ButtonEmits = {
  click: () => void 0
}

export interface ButtonSlots extends SlotsType {
  default: never,
}

export type ButtonProps = MakePropsType<typeof buttonProps, ButtonEmits>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define({
    name: 'NsButton',
    props: buttonProps,
    emits,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
      }
    }
  }
)
