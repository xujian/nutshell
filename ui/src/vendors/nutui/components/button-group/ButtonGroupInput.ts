import { defineComponent, h } from 'vue'
import { buttonGroupInputEmits, buttonGroupInputProps, NsButtonGroup } from '../../../../components/button-group'
import { renderFormItem } from '../../utils'

export const ButtonGroupInput = defineComponent({
  name: 'NutuiButtonGroupInput',
  props: buttonGroupInputProps,
  emits: buttonGroupInputEmits,
  setup (props, { emit, slots }) {

    console.log('===ButtonGroupInput', props)
    return () =>
      renderFormItem(props,
        slots,
        () =>
          h(NsButtonGroup, {
              ...props,
              modelValue: props.modelValue,
              items: props.options,
            })
      )
  }
})
