import { defineComponent, h } from 'vue'
import { inputEmits, inputProps, inputSlots } from '../../../../components'
import { marginProps } from '../../../../utils'

export const Input = defineComponent({
  name: 'NutuiInput',
  props: {
    ...inputProps,
    ...marginProps
  },
  emits: inputEmits,
  slots: inputSlots,
  setup (props, {slots,}) {
    return () => h(NutFormItem, {
        class: [
            'ns-input',
            'ns-form-item',
            ...props.variant ? [`variant-${props.variant}`] : []
          ],
        label: props.label
      },
      h(NutInput, {
          border: false,
          placeholder: props.placeholder,
          modelValue: props.modelValue,
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
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
