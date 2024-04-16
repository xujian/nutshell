import { multipleSelectProps } from '../../../../components/select'
import { defineComponent, h } from 'vue'
import { Select as AntSelect } from 'ant-design-vue'
import { transformRules } from '../input/rules'
import { FullValidationRule } from '../../../../props/field'
import { SelectValue } from 'ant-design-vue/es/select'
import { renderFormItem } from '../../utils'

export const MultipleSelect = defineComponent({
  name: 'AntdvMultipleSelect',
  props: multipleSelectProps,
  setup(props, ctx) {
    const { emit } = ctx

    const classes = ['ns-select', 'ns-multiple-select'].join(' ')

    const { clearable, searchable } = props

    const rules = transformRules(props.rules as FullValidationRule[])
    return () => renderFormItem(props, ctx.slots,() =>
        h(AntSelect, {
          class: classes,
          name: props.name,
          mode: props.tagsMode ? 'tags' : 'multiple',
          options: props.options,
          allowClear: clearable,
          showSearch: searchable,
          showArrow: true,
          value: props.modelValue,
          getPopupContainer: (triggerNode) => triggerNode.parentNode,
          'onUpdate:value': (value: SelectValue) => {
            props['onUpdate:modelValue']?.(value as string[])
          },
          onChange: (value: SelectValue) => {
            emit('change', value)
          },
          popupClassName: 'ns-select-dropdown',
          disabled: props.disabled ?? false,
          placeholder: props.placeholder,
          maxTagCount: props.maxTags,
          optionFilterProp: 'label',
          tokenSeparators: [',']
        })
      )
  }
})
