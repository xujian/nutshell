import { defineComponent, h } from 'vue'
import { numberInputEmits, numberInputProps } from '../../../../components'
import { marginProps } from '../../../../utils'
import { renderFormItem, useForm } from '../../utils'

export const NumberInput = defineComponent({
  name: 'NutuiNumberInput',
  props: {
    ...numberInputProps,
    ...marginProps
  },
  emits: numberInputEmits,
  setup (props, { slots }) {

    const form = useForm()
    console.log(props.precision, 'props.precision')

    return () => renderFormItem(props, slots,
      () => h(NutInput, {
          border: false,
          name: props.name,
          type: (props.precision as number) > 0 ? 'digit' : 'number',
          placeholder: props.placeholder,
          modelValue: props.modelValue,
          inputAlign: props.variant === 'solid' ? 'left' : 'right',
          placeholderClass: 'input-placeholder',
          'onUpdate:modelValue': (value: number | string) => {
            props['onUpdate:modelValue']?.(value)
          },
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
