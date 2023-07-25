import { h, ComponentObjectPropsOptions, ExtractPublicPropTypes, PropType, defineComponent } from 'vue'
import { useProvider } from '../../shared'

/**
 * 输入框类型
 */
export type InputType = 'text' 
  | 'password' 
  | 'number' 

const inputProps = {
  type: {
    type: String as PropType<InputType>,
    required: false,
    default: 'plain'
  },
  label: {
    type: String,
    required: false,
    default: ''
  }
}

export type InputProps = ExtractPublicPropTypes<typeof inputProps>


/**
 * 输入框 <ns-input>
 */
export const NsInput = defineComponent<InputProps>(
  (props, {slots, emit, attrs}) => {
    console.log('attrs----', attrs)
    const provider = useProvider()
    return () => 
      h(provider, {
        ...props,
        ...attrs
      })
  }, {
    name: 'NsInput',
    inheritAttrs: true,
    props: inputProps as ComponentObjectPropsOptions<InputProps>,
    emits: ['click', 'focus'],
  }
)