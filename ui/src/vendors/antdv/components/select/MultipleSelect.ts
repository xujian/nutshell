import { multipleSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect, FormItem as AntFormItem } from 'ant-design-vue'
import { transformRules } from '../input/rules'
import { FullValidationRule } from '../../../../props/field'
import { SelectValue } from 'ant-design-vue/es/select'

export const MultipleSelect = defineComponent({
  name: 'AntdvMultipleSelect',
  props: multipleSelectProps,
  setup (props, ctx) {

    const { emit } = ctx

    const classes = [
      'ns-select',
      'ns-multiple-select'
    ].join(' ')

    const {
      clearable, searchable
    } = props

    const rules = transformRules(props.rules as FullValidationRule[])
    return () => h(AntFormItem, {
        name: props.name,
        class: 'ns-form-item',
        label: props.label,
        rules
      }, () => h(AntSelect, {
        class: classes,
        name: props.name,
        mode: 'multiple',
        options: props.options,
        allowClear: clearable,
        showSearch: searchable,
        value: props.modelValue,
        'onUpdate:value': (value: SelectValue) => {
          props['onUpdate:modelValue']?.(value as string[])
        },
        'onChange': (value: SelectValue) => {
          emit('change', value)
        },
        popupClassName: 'ns-select-dropdown',
        disabled: props.disabled ?? false,
        placeholder: props.placeholder,
        maxTagCount: props.maxTagShowCount,
        optionFilterProp: 'label'
      })
    )
  }
})
