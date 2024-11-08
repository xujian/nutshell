import { defineComponent, h } from 'vue'
import { RadioGroup as AntdvRadioGroup, Radio as AntdvRadio, RadioChangeEvent } from 'ant-design-vue'
import { radioGroupProps } from '../../../../components'
import { renderFormItem } from '../../utils'

export const RadioGroup = defineComponent({
  name: 'AntdvRadioGroup',
  props: radioGroupProps,
  setup (props, ctx) {

    const { emit } = ctx

    const children = () => props.options?.map(item => h(AntdvRadio, {
      value: item.value,
      disabled: item.disabled,
    }, () => item.label))

    return () =>
      renderFormItem(
        {
          ...props,
        },
        ctx.slots,
        () =>
          h(
            AntdvRadioGroup,
            {
              class: [
                ...(props.direction === 'column' ? ['column'] : ['row'])
              ],
              name: (props.name || 'radio') as string,
              value: props.modelValue,
              disabled: props.disabled ?? false,
              'onUpdate:value': (value: string | number) => {
                emit('update:modelValue', value)
              },
              onChange: (e: RadioChangeEvent) => {
                e.stopPropagation()
                emit('change', e.target.value)
              }
            },
            children
          )
      )
  }
})
