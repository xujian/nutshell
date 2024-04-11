import { selectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect } from 'ant-design-vue'
import { SelectValue } from 'ant-design-vue/es/select'
import { renderFormItem } from '../../utils'

export const Select = defineComponent({
  name: 'AntdvSelect',
  props: selectProps,
  setup (props, ctx) {

    const { emit } = ctx

    const classes = [
      'ns-select',
    ].join(' ')

    const {
      clearable, searchable
    } = props

    return () => renderFormItem({
        name: props.name,
        class: [
          'ns-form-item',
          props.variant ? `variant-${props.variant}` : '',
        ],
        label: props.label,
      }, ctx.slots,
      () => h(AntSelect, {
        class: classes,
        name: props.name,
        options: props.options,
        allowClear: clearable,
        showSearch: searchable,
        value: props.modelValue,
        getPopupContainer: (triggerNode) => triggerNode.parentNode,
        'onUpdate:value': (value: SelectValue) => {
          props['onUpdate:modelValue']?.(value as string | number)
        },
        'onChange': (value: SelectValue) => {
          emit('change', value)
        },
        placeholder: props.placeholder,
        popupClassName: 'ns-select-dropdown',
        disabled: props.disabled ?? false,
        optionFilterProp: 'label'
      })
    )
  }
})
