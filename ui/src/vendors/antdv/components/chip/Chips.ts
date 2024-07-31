import { h, ref, SetupContext, VNode } from 'vue'
import { ChipsProps, NsButton, NsCheckboxGroup, NsChip, NsPopover } from '../../../../components'
import { UniDataItem } from '../../../../shared'

export const Chips = (props: ChipsProps, { emit, slots }: SetupContext) => {
  const options = props.options || []

  const onItemClick = (item: UniDataItem) => {
    const value = props.modelValue || [],
      itemIncludes = value.includes(`${item.value}`),
      newValue = itemIncludes
        ? value.filter((a) => a !== `${item.value}`)
        : Array.from(new Set([...value, `${item.value}`]))
    props['onUpdate:modelValue']?.(newValue)
  }

  return h('div', {
  }, {
    default: () => options.map((o) => {
      const on = props.modelValue && props.modelValue.includes(o.value as string)
      return h(NsChip, {
        class: [
          ...on ? ['active'] : [],
          ...props.classes || []
        ],
        style: props.style,
        variant: props.variant,
        label: o.label,
        onClick: () => onItemClick(o)
      })
    })
  })
}
