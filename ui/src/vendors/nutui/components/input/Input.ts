import { defineComponent, h } from 'vue'
import { inputEmits, inputProps, inputSlots } from '../../../../components/input'
import { marginProps } from '../../../../utils'
import { renderFormItem, useForm } from '../../utils'

export const Input = defineComponent({
  name: 'NutuiInput',
  props: {
    ...inputProps,
    ...marginProps
  },
  emits: inputEmits,
  slots: inputSlots,
  setup (props, { slots, emit }) {

    const form = useForm()

    return () => renderFormItem(props, slots,
      () => h(NutInput, {
          border: false,
          name: props.name,
          placeholder: props.placeholder,
          modelValue: props.modelValue,
          disabled: props.disabled ?? false,
          maxLength: props.maxlength ?? 50,
          inputAlign: props.variant === 'solid' ? 'left' : 'right',
          placeholderClass: 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            const val = props.modelModifiers?.trim ? value.trim() : value
            props['onUpdate:modelValue']?.(val)
          },
          onBlur: () => {
            form.validate(props.name as string)
            emit('blur')
          },
          onChange: (e: any) => {
            emit('change', e.detail.value)
          },
        },
        {
          ...slots.prepend ? { left: slots.prepend} : {},
          ...slots.append ? { right: slots.append } : {}
        }
      )
    )
  }
})
