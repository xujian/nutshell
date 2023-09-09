import { h, ref } from 'vue'
import { FormItem as AntFormItem, Input as AntInput } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { InputType, inputProps, InputProps } from '../../../../components/input'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from './rules'
import type { MarginProps } from '../../../../utils'
import { marginProps } from '../../../../utils'

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
  props: {
    ...inputProps,
    ...marginProps,
  },
  setup: (props: InputProps & MarginProps, ctx) => {
    const classes = [
      'ns-input',
    ]

    const rules = transformRules(props.rules as FullValidationRule[])
    console.log('Ant---Input.........///', props.classes)

    return () => 
      h(AntFormItem, {
        name: props.name,
        class: ['ns-form-item'].concat(props.classes),
        label: props.label,
        rules,
      }, () => h(AntInput, {
        type: props.type as AntInputType,
        name: props.name,
        value: props.modelValue,
        'onUpdate:value': (value: number | string) => {
          props['onUpdate:modelValue']?.(value)
        }
      })
    )
  }
})
