import { defineComponent, h } from 'vue'
import { buttonGroupInputEmits, buttonGroupInputProps, ButtonGroupProps, NsButtonGroup } from '../../../../components/button-group'
import { renderFormItem } from '../../utils'
import { NsButton } from 'src/components'

export const ButtonGroupInput = defineComponent({
  name: 'NutuiButtonGroupInput',
  props: buttonGroupInputProps,
  emits: buttonGroupInputEmits,
  setup (props, { emit, slots }) {

    return () =>
      renderFormItem(props,
        slots,
        () =>
          h(NsButtonGroup, {
            ...props,
            modelValue: props.modelValue,
            items: props.options,
          } as ButtonGroupProps)
      )
  }
})
