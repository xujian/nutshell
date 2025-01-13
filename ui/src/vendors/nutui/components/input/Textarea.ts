import { defineComponent, h } from 'vue'
import { textareaEmits, textareaProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import { renderFormItem, useForm } from '../../utils'

export const Textarea = defineComponent({
  name: 'NutuiTextarea',
  props: {
    ...textareaProps,
    ...marginProps
  },
  emits: textareaEmits,
  setup (props, { slots, emit }) {

    const form = useForm()

    return () => renderFormItem(props, slots,
      () => h(NutTextarea, {
          border: false,
          name: props.name,
          placeholder: props.placeholder || '',
          modelValue: props.modelValue as string,
          disabled: props.disabled ?? false,
          maxLength: props.maxlength ?? 200,
          textAlignAlign: props.variant === 'solid' ? 'left' : 'right',
          placeholderClass: 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
          },
          onBlur: () => {
            form.validate(props.name as string)
            emit('blur')
          },
          onChange: (e: any) => {
            emit('change', e.detail.value)
          },
          // onFocus: (e: FocusEvent) => {
          //   emit('focus')
          // },
          // onKeyup: (e: KeyboardEvent) => {
          //   emit('keyup', e.key)
          // },
          // onPressEnter: (e: KeyboardEvent) => {
          //   emit('enter')
          // }
        },
        {}
      )
    )
  }
})
