import { h } from 'vue'
import { FormItem as AntFormItem, Input as AntInput } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { inputProps, inputEmits } from '../../../../components/input'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from './rules'
import { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface'
import { marginProps } from '../../../../utils/private/helpers'

export type AntInputType = 
  'number' | 'button' | 'time' | 'reset' | 'submit' 
  | 'image' | 'text' | 'search' | 'checkbox' | 'radio' 
  | 'hidden' | 'color' | 'range' | 'date' | 'url' 
  | 'email' | 'week' | 'month' 
  | 'tel' | 'datetime-local' | 'file' | 'password'

/**
 * Antdv DateInput
 */
export const Input = defineComponent({
  name: 'Input',
  props: {
    ...inputProps,
    ...marginProps,
  },
  emits: inputEmits,
  setup: (props, { emit }) => {
    const classes = [
      'ns-input',
      ...props.classes || []
    ]

    const rules = transformRules(props.rules as FullValidationRule[])
    return () => 
      h(AntFormItem, {
        class: [
          'ns-form-item',
          ...props.classes || [],
          props.variant ? `variant-${props.variant}` : '',
        ],
        label: props.label,
        name: props.name,
        rules,
      }, () => h(AntInput, {
        type: props.type as AntInputType,
        maxlength: props.maxlength ?? 50,
        value: props.modelValue,
        placeholder: props.placeholder,
        'onUpdate:value': (value: string) => {
          const val = props.modelModifiers?.trim
            ? value.trim()
            : value
          props['onUpdate:modelValue']?.(val)
        },
        onChange: (e: ChangeEvent) => {
          emit('change', e.target.value)
        }
      })
    )
  }
})
