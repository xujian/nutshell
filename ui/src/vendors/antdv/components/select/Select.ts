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

    const {
      clearable, searchable
    } = props

    return () => renderFormItem({
        ...props,
        class: [
          props.variant ? `variant-${props.variant}` : '',
        ],
      }, ctx.slots,
      () => h(AntSelect, {
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
