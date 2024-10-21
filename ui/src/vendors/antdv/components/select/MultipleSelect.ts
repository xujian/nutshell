import { multipleSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect } from 'ant-design-vue'
import { SelectValue } from 'ant-design-vue/es/select'
import { renderFormItem } from '../../utils'

export const MultipleSelect = defineComponent({
  name: 'AntdvMultipleSelect',
  props: multipleSelectProps,
  setup(props, ctx) {
    const { emit } = ctx

    const { clearable, searchable } = props

    return () => renderFormItem(props, ctx.slots,() =>
        h(AntSelect, {
          class: ['ns-multiple-select'],
          name: props.name,
          mode: props.tagsMode ? 'tags' : 'multiple',
          options: props.options,
          allowClear: clearable,
          showSearch: searchable,
          showArrow: true,
          value: props.modelValue,
          'onUpdate:value': (value: SelectValue) => {
            props['onUpdate:modelValue']?.(value as string[])
          },
          onChange: (value: SelectValue) => {
            emit('change', value)
          },
          /**
           * 选项浮层插入到本地
           * 某些场景(表格单元格内/对话框内)不允许将浮层插到 document.body
           */
          ...props.detatched === false
            ? { getPopupContainer: (me: any) => me.parentNode }
            : {},
          popupClassName: 'ns-select-dropdown',
          disabled: props.disabled ?? false,
          placeholder: props.placeholder,
          maxTagCount: props.maxTags,
          optionFilterProp: 'label',
          tokenSeparators: [',']
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
