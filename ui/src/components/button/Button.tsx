import { useProvider } from '../../shared'
import { withDirectives, defineComponent, h, ExtractPropTypes, PropType, ExtractPublicPropTypes, ComponentObjectPropsOptions } from 'vue'
// import { defineComponent } from '../../utils'

/**
 * 按钮类型
 */
export type ButtonType = 'default' 
  | 'primary' 
  | 'secondary' 
  | 'warning' 
  | 'danger'

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

export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>

/**
 * 通用按钮组件 <ns-button>
 */
const NsButton = defineComponent<ButtonProps>(
  (props, {slots, emit, attrs}) => {
    console.log('attrs----', attrs)
    const provider = useProvider()
    return () => 
      h(provider, {
        ...props,
        p: 1,
        a: 2,
        ...attrs
      })
  }, {
    name: 'NsButton',
    inheritAttrs: true,
    props: buttonProps as ComponentObjectPropsOptions<ButtonProps>,
    emits: ['click', 'focus'],
  }
)

export default NsButton
