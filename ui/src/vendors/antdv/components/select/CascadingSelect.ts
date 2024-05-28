import { cascadingSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Cascader as AntCascader } from 'ant-design-vue'
import { ValueType } from 'ant-design-vue/es/vc-cascader/Cascader'
import { renderFormItem } from '../../utils'

export const CascadingSelect = defineComponent({
  name: 'AntdvCascadingSelect',
  props: cascadingSelectProps,
  setup(props, ctx) {

    const { clearable, searchable } = props

    const classes = ['ns-select', 'ns-cascading-select'].join(' ')

    return () => renderFormItem(props, ctx.slots,
      () =>
        h(AntCascader, {
          class: classes,
          name: props.name,
          options: props.options,
          allowClear: clearable,
          showSearch: searchable,
          value: props.modelValue,
          placeholder: props.placeholder,
          'onUpdate:value': (value: ValueType) => {
            props['onUpdate:modelValue']?.(value as string[])
          },
          popupClassName: 'ns-select-dropdown',
          disabled: props.disabled ?? false
        },
        {
          suffixIcon: () => h('i', {
            class: [
              'arrow'
            ]
          }, '▼'),
        })
      )
  }
})
