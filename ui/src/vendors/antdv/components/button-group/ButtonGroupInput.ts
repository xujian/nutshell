import { defineComponent, h } from 'vue'
import { RadioGroup as AntdvRadioGroup, Radio as AntdvRadio, RadioChangeEvent } from 'ant-design-vue'
import { buttonGroupInputProps, NsButtonGroup } from '../../../../components'
import { renderFormItem } from '../../utils'

export const ButtonGroupInput = defineComponent({
  name: 'AntdvButonGroupInput',
  props: buttonGroupInputProps,
  setup (props, ctx) {

    console.log('===ButtonGroupInput', props.size)

    const { emit } = ctx

    return () =>
      renderFormItem(
        {
          ...props,
        },
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
