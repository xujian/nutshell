import { define } from '../../utils'
import { withDirectives, h, ExtractPropTypes, PropType, ExtractPublicPropTypes, ComponentObjectPropsOptions, EmitsOptions, ObjectEmitsOptions, SlotsType } from 'vue'

/**
 * 按钮类型
 */
export type ButtonType = 'default' 
  | 'primary'
  | 'info' 
  | 'warning'
  | 'danger'
  | 'success'

const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    required: false,
    default: 'plain'
  },
  label: {
    type: String,
    required: false,
    default: 'Button'
  }
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

export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define<ButtonProps, ButtonEmits, string, ButtonSlots>(
  // 提供 setup(), options 给 define()
  // 返回 NsButton 的组件定义
  // define() 对 props 重新编排后, 返回具体的组件绘制过程
  (props, {slots, emit, attrs}) => { // setup ()
    return {
      ...props,
      ...attrs
    }
  }, {
    name: 'NsButton',
    emits
  }
)
