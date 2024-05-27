import { h, nextTick, ref } from 'vue'
import { Input as AntInput } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { inputProps, inputEmits } from '../../../../components/input'
import { ChangeEvent } from 'ant-design-vue/es/_util/EventInterface'
import { marginProps } from '../../../../utils/private/helpers'
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
    const inputRef = ref()

    return () =>
      renderFormItem(
        props, slots,
        () => h(
            AntInput,
            {
              ref: inputRef,
              class: props.classes,
              type: props.type as AntInputType,
              maxlength: props.maxlength ?? 50,
              showCount: props.hasCount ?? false,
              disabled: props.disabled ?? false,
              allowClear: props.clearable,
              value: props.modelValue,
              placeholder: props.placeholder,
              ...props.lazy
              ? {
                  valueModifiers: {
                    lazy: true,
                  }
                }
              : {},
              'onUpdate:value': (value: string) => {
                const val = props.modelModifiers?.trim ? value.trim() : value
                props['onUpdate:modelValue']?.(val)
                nextTick(() => {
                  inputRef.value?.focus()
                })
              },
              onChange: (e: ChangeEvent) => {
                emit('change', e.target.value)
              },
              onBlur: (e) => {
                emit('blur')
              },
              onFocus: (e: FocusEvent) => {
                emit('focus')
              },
              onKeyup: (e: KeyboardEvent) => {
                console.log('===keyupupoupupup')
                emit('keyup', e.key)
              },
              onPressEnter: (e: KeyboardEvent) => {
                emit('enter')
              }
            },
            {
              prefix: slots.prepend
            }
          ),
      )
  }
})
