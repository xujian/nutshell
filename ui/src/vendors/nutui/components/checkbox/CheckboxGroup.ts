import { defineComponent, h } from 'vue'
import { checkboxGroupProps } from '../../../../components'
import { marginProps } from '../../../../utils'

export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  props: {...checkboxGroupProps, ...marginProps},
  setup (props, ctx) {
    const { emit, slots } = ctx

    return ()=> h(
      NutCheckboxGroup,
      {
        ref: props.vendorRef,
        name: (props.name || 'checkbox') as string,
        modelValue: props.modelValue,
        disabled: props.disabled ?? false,
        max: props.max,
        'onUpdate:modelValue': (value: string | number) => {
          emit('update:modelValue', value)
        },
        onChange: (value: string) => {
          emit('change', value)
        }
      },
      slots
    )
  }
})
