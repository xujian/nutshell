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
    console.log('===INPUT.TS', slots.prepend)
    return () => h('div', {
      class: [
          'ns-input',
          ...props.variant ? [`variant-${props.variant}`] : []
        ],
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
