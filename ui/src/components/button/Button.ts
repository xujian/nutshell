import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
import { useSizeProps, useVariantProps } from '../../props'
import { define, MakePropsType } from '../../utils'
import { useDimensionProps, useLoadingProps } from '../../props'
import { Color } from '../../composables/theme'
import { IconFormat } from '../icon'

export type IconPosition = 'start' | 'end'

export const useButtonProps = () => ({
  /**
   * 显示的文字
   */
  label: {
    type: String
  },
  /**
   * 按钮底色
   */
  color: {
    type: String as PropType<Color>,
  },
  /**
   * 圆角按钮
   */
  round: {
    type: Boolean
  },
  icon: {
    type: String
  },
  iconPosition: {
    type: String as PropType<IconPosition>,
  },
  iconFill: {
    type: String as PropType<Color>,
  },
  iconFormat: {
    type: String as PropType<IconFormat>,
  },
  ...useSizeProps(),
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false
  }
})

const buttonProps = {
  ...useButtonProps(),
  ...useDimensionProps(),
  ...useVariantProps(),
  ...useLoadingProps()
}

export type ButtonEmits = {
  click: (...args: any[]) => any
}

const emits: ButtonEmits = {
  click: (...args: any[]) => void 0
}

export type ButtonSlots = {
  default: never
}

export type ButtonProps = MakePropsType<typeof buttonProps, ButtonEmits>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define({
  name: 'NsButton',
  props: buttonProps,
  emits,
  setup(props, ctx) {
    // 对参数做前期的处理
    return {}
  }
})

export type NsButton = InstanceType<typeof NsButton>
