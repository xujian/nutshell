import { selectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect, FormItem as AntFormItem } from 'ant-design-vue'

export const Select = defineComponent({
  name: 'AntdvSelect',
  props: selectProps,
  setup (props, ctx) {

    const classes = [
      'ns-select',
    ].join(' ')

    const {
      options, clearable, searchable
    } = props
  
    return () => h(AntFormItem, {
        class: 'ns-form-item',
        label: props.label
      }, () => h(AntSelect, {
        class: classes,
        options,
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