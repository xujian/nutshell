import { h, ref } from 'vue'
import { FormItem as AntFormItem, Input as AntInput } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { InputType, inputProps } from '../../../../components/input'

export type AntInputType = 
  'number' | 'button' | 'time' | 'reset' | 'submit' 
  | 'image' | 'text' | 'search' | 'checkbox' | 'radio' 
  | 'hidden' | 'color' | 'range' | 'date' | 'url' 
  | 'email' | 'week' | 'month' 
  | 'tel' | 'datetime-local' | 'file' | 'password'

const inputTypeMapping: Record<InputType, AntInputType> = {

}

/**
 * Antdv DateInput
 */
export const Input = defineComponent({
  name: 'Input',
  props: inputProps,
  setup: (props, ctx) => {
    const classes = [
      'ns-input',
    ].join(' ')

    console.log('AntFormItem.............props', props)
    return () => 
      h(AntFormItem, {
        class: 'ns-form-item',
        label: props.label
      }, [h(AntInput, {
        type: props.type as AntInputType,
        value: props.modelValue,
        'onUpdate:value': (value: number | string) => {
          props['onUpdate:modelValue']?.(value)
        }
      })]
    )
  }
})
