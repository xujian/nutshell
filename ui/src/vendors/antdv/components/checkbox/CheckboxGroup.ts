import { defineComponent, h } from 'vue'
import { CheckboxGroup as AntdvCheckboxGroup } from 'ant-design-vue'
import { checkboxGroupProps } from '../../../../components'
import { CheckboxChangeEvent, CheckboxValueType } from 'ant-design-vue/es/checkbox/interface'
import { renderFormItem } from '../../utils'

export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  props: checkboxGroupProps,
  setup (props, ctx) {
    const { emit } = ctx

    return () =>
      renderFormItem(
        {
          ...props,
        },
        ctx.slots,
        () =>
          h(
            AntdvCheckboxGroup,
            {
              class: [
                ...(props.direction === 'column' ? ['column'] : ['row'])
              ],
              options: props.options,
              name: (props.name || 'checkbox') as string,
              value: props.modelValue as CheckboxValueType[],
              disabled: props.disabled ?? false,
              'onUpdate:value': (value: CheckboxValueType[]) => {
                emit('change', value)
                props['onUpdate:modelValue']?.(value as string[])
              },
            },
          )
      )
  }
})
