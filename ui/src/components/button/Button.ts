import { useSizeProps } from '../../props'
import { define } from '../../utils'
import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ComponentObjectPropsOptions } from 'vue'
import { useDimensionProps } from '../../props'

/**
 * 按钮类型
 */
export type ButtonType = 'default' 
  | 'primary'
  | 'info' 
  | 'warning'
  | 'danger'
  | 'success'

const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'plain'
  },
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
    type: String,
  },
  /**
   * 禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  ...useSizeProps(),
  ...useDimensionProps(),
}

export interface ButtonEmits extends ObjectEmitsOptions {
  click?: () => void
}

const emits = {
  click: () => {}
}

export interface ButtonSlots extends SlotsType {
  default: never,
}

export type ButtonProps = ExtractPublicPropTypes<typeof props>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define({
    name: 'NsButton',
    props,
    emits,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
      }
    }
  }
)
