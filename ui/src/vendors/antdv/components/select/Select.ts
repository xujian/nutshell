import { selectProps, NsMenu } from '../../../../components'
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
        'onUpdate:value': (value: SelectValue) => {
          props['onUpdate:modelValue']?.(value as string | number)
        },
        'onChange': (value: SelectValue) => {
          emit('change', value)
        },
        /**
         * 选项浮层插入到本地
         * 某些场景(表格单元格内/对话框内)不允许将浮层插到 document.body
         */
        ...props.detatched === false
          ? { getPopupContainer: (me: any) => me.parentNode }
          : {},
        placeholder: props.placeholder,
        popupClassName: 'ns-select-dropdown',
        disabled: props.disabled ?? false,
        optionFilterProp: 'label'
      },
      {
        suffixIcon: () => h('i', {
          class: [
            'arrow'
          ]
        }, ''),
      })
    )
  }
})
