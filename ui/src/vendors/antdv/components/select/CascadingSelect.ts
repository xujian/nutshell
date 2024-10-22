import { cascadingSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Cascader as AntCascader } from 'ant-design-vue'
import { ValueType } from 'ant-design-vue/es/vc-cascader/Cascader'
import { renderFormItem } from '../../utils'

export const CascadingSelect = defineComponent({
  name: 'AntdvCascadingSelect',
  props: cascadingSelectProps,
  setup(props, ctx) {
    console.log(props, 'props')

    const { clearable, searchable } = props

    return () => renderFormItem(props, ctx.slots,
      () =>
        h(AntCascader, {
          class: ['ns-cascading-select'],
          name: props.name,
          options: props.options,
          allowClear: clearable,
          showSearch: searchable,
          value: props.modelValue,
          placeholder: props.placeholder,
          maxTagCount: props.maxTags,
          multiple: props.multiple,
          'onUpdate:value': (value: ValueType) => {
            props['onUpdate:modelValue']?.(value as string[])
          },
          /**
           * 选项浮层插入到本地
           * 某些场景(表格单元格内/对话框内)不允许将浮层插到 document.body
           */
          ...props.detatched === false
            ? { getPopupContainer: (me: any) => me.parentNode }
            : {},
          popupClassName: 'ns-select-dropdown',
          disabled: props.disabled ?? false
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
