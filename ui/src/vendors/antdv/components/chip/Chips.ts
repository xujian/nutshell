import { h, SetupContext } from 'vue'
import { FormItem as AntFormItem } from 'ant-design-vue'
import { ChipsProps, NsChip } from '../../../../components'
import { LabelValuePair } from '../../../../shared/models'

export const Chips = (props: ChipsProps, ctx: SetupContext) => {

  const options = props.options || []

  const onItemClick = (item: LabelValuePair) => {
    const value = props.modelValue || [],
      itemIncludes = value.includes(item.value),
      newValue = itemIncludes
        ? value.filter(a => a !== item.value)
        : Array.from(new Set([...value, item.value]))
      props['onUpdate:modelValue']?.(newValue)
  }

  return h(AntFormItem, {
    class: [
      'ns-chips',
      'ns-form-item',
    ],
    label: props.label,
  }, () => options.map(o => h(NsChip, {
      class: [
        ...props.modelValue.includes(o.value)
          ? ['selected']
          : []
      ],
      color: props.modelValue.includes(o.value) ? 'primary' : 'neutral',
      variant: props.modelValue.includes(o.value) ? '' : 'outlined',
      onClick: () => onItemClick(o),
      label: o.label,
    }))
  )
}
// + import => ./index.ts, ../components.ts
