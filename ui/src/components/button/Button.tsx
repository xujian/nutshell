import { withDirectives, h, defineComponent, ExtractPropTypes, PropType } from 'vue'
import { createComponent } from '../../utils/private/create'

/**
 * 按钮类型
 */
export type ButtonType = 'default' | 'primary'

const buttonProps = 
  {
    type: {
      type: String as PropType<ButtonType>,
      default: 'plain'
    },
    label: String,
  }

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

/**
 * 通用按钮组件
 */
const NButton = defineComponent({
  name: 'NButton',
  props: buttonProps,
  emits: ['click', 'focus'],
  setup (props, {slots, emit}) {
    return () => (
      <div class="n-button primary">
        {props.label}
      </div>
    )
  }
})

export default NButton