import { cascadingSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Cascader as AntCascader, FormItem as AntFormItem } from 'ant-design-vue'
import { transformRules } from '../input/rules'
import { FullValidationRule } from '../../../../props/field'
import { ValueType } from 'ant-design-vue/es/vc-cascader/Cascader'

export const CascadingSelect = defineComponent({
  name: 'AntdvCascadingSelect',
  props: cascadingSelectProps,
  setup(props, ctx) {
    const classes = ['ns-select', 'ns-cascading-select']

    const { clearable, searchable } = props

    const rules = transformRules(props.rules as FullValidationRule[])

    return () =>
      h(
        AntFormItem,
        {
          name: props.name,
          class: 'ns-form-item',
          label: props.label,
          rules
        },
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
          })
      )
  }
})
