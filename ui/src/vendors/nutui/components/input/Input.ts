import { defineComponent, h, inject, onMounted } from 'vue'
import { inputEmits, inputProps, inputSlots } from '../../../../components'
import { marginProps } from '../../../../utils'
import { renderFormItem, NutuiFormSymbol } from '../../utils'

export const Input = defineComponent({
  name: 'NutuiInput',
  props: {
    ...inputProps,
    ...marginProps
  },
  emits: inputEmits,
  slots: inputSlots,
  setup (props, { slots }) {

    const form = inject(NutuiFormSymbol)

    return () => renderFormItem(props, slots,
      () => h(NutInput, {
          border: false,
          name: props.name,
          placeholder: props.placeholder,
          modelValue: props.modelValue,
          inputAlign: 'right',
          placeholderClass: 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
          },
          onBlur () {
            console.log('===PPonBLur', form)
            if (form) {
              console.log('===PPonBLur', form.value)
              form.value?.validate(props.name as string)
            }
            return false
          }
        },
        {
          ...slots.prepend ? {
            // @ts-ignore
            left: () => slots.prepend()
          } : {}
        }
      )
    )
  }
})
