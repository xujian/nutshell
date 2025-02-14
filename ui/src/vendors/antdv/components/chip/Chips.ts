import { h, SetupContext, useAttrs } from 'vue'
import { ChipsProps, NsChip } from '../../../../components'
import { UniDataItem } from '../../../../shared'
import { VendorWrapper } from '../../../VendorWrapper'

export const Chips = (props: ChipsProps, { emit, slots }: SetupContext) => {
  const items = props.items || []

  const attrs = useAttrs()

  const onItemClick = (item: UniDataItem) => {
    const value = props.modelValue || [],
      itemIncludes = value.includes(`${item.value}`),
      newValue = itemIncludes
        ? value.filter((a) => a !== `${item.value}`)
        : Array.from(new Set([...value, `${item.value}`]))
    props['onUpdate:modelValue']?.(newValue)
  }

  return h(VendorWrapper, {
    ignoresDesign: true
  }, {
    default: () => items.map((o) => {
      const on = props.modelValue && props.modelValue.includes(o.value as string)
      return h(NsChip, {
        class: [
          ...on ? ['active'] : [],
        ],
        style: attrs.style,
        variant: props.variant,
        label: o.label,
        value: o.value as string,
        closable: o.closable || false,
        onClick: () => onItemClick(o),
        onClose: (e: ChipsProps) => {
          emit('close', e)
        }
      })
    })
  })
}
