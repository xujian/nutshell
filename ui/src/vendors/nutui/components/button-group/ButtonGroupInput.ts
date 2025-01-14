import { defineComponent, h } from 'vue'
import { buttonGroupInputProps, NsButtonGroup } from '../../../../components/button-group'
import { renderFormItem } from '../../utils'

export const ButtonGroupInput = defineComponent({
  name: 'NutuiButtonGroupInput',
  props: buttonGroupInputProps,
  setup (props, ctx) {

    const { emit } = ctx

    return () =>
      renderFormItem(props,
        ctx.slots,
        () =>
          h(
            NsButtonGroup,
            {
              ...props,
              size: props.size || 'sm'
            },
          )
      )
  }
})
