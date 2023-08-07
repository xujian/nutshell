import { Props } from 'ant-design-vue/es/form/useForm'
import { define } from '../../utils'
import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType } from 'vue'

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
    required: false,
    default: 'plain'
  },
  /**
   * 显示的文字
   */
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

export type ButtonProps = ExtractPublicPropTypes<typeof props>

/**
 * 通用按钮组件 <ns-button>
 */
export const NsButton = define<ButtonProps, ButtonEmits, ButtonSlots>({
    name: 'NsButton',
    props,
    emits,
    setup (props, ctx) {
      // 对参数做前期的处理
      return {
        props
      }
    }
  }
)
