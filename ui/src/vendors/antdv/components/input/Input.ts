import { h } from 'vue'
import { Input as AntInput } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { inputProps, inputEmits } from '../../../../components/input'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from './rules'
import { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface'
import { marginProps } from '../../../../utils/private/helpers'
import { withModifiers } from 'vue'
import { renderFormItem } from '../../utils'

export type AntInputType =
  | 'number'
  | 'button'
  | 'time'
  | 'reset'
  | 'submit'
  | 'image'
  | 'text'
  | 'search'
  | 'checkbox'
  | 'radio'
  | 'hidden'
  | 'color'
  | 'range'
  | 'date'
  | 'url'
  | 'email'
  | 'week'
  | 'month'
  | 'tel'
  | 'datetime-local'
  | 'file'
  | 'password'

/**
 * Antdv Input
 */
export const Input = defineComponent({
  name: 'Input',
  props: {
    ...inputProps,
    ...marginProps
  },
  emits: inputEmits,
  setup: (props, { emit, slots }) => {
    return () =>
      renderFormItem(
        props, slots,
        () => h(
            AntInput,
            {
              class: props.classes,
              type: props.type as AntInputType,
              maxlength: props.maxlength ?? 50,
              showCount: props.hasCount ?? false,
              disabled: props.disabled ?? false,
              value: props.modelValue,
              placeholder: props.placeholder,
              valueModifiers: {
                lazy: props.lazy === false ? false : true
              },
              'onUpdate:value': (value: string) => {
                const val = props.modelModifiers?.trim ? value.trim() : value
                props['onUpdate:modelValue']?.(val)
              },
              onChange: (e: ChangeEvent) => {
                emit('change', e.target.value)
              },
              onBlur: (e: FocusEvent) => {
                emit('blur', props.modelValue)
              },
              onFocus: (e: FocusEvent) => {
                emit('focus', props.modelValue)
              }
            },
          ),
      )
  }
})
