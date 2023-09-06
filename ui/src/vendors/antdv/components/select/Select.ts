import { selectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect, FormItem as AntFormItem } from 'ant-design-vue'
import { transformRules } from '../input/rules'
import { FullValidationRule } from '../../../../props/field'

export const Select = defineComponent({
  name: 'AntdvSelect',
  props: selectProps,
  setup (props, ctx) {

    const classes = [
      'ns-select',
    ].join(' ')

    const {
      clearable, searchable
    } = props
  
    const rules = transformRules(props.rules as FullValidationRule[])
    console.log('///////////////', rules)
    return () => h(AntFormItem, {
        name: props.name,
        class: 'ns-form-item',
        label: props.label,
        rules
      }, () => h(AntSelect, {
        class: classes,
        name: props.name,
        options: props.options,
        allowClear: clearable,
        showSearch: searchable,
        value: props.modelValue,
        'onUpdate:value': (value: number | string) => {
          props['onUpdate:modelValue']?.(value)
        }
      })
    )
  }
})