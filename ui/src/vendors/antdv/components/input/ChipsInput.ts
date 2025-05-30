import { h, ref, SetupContext, VNode } from 'vue'
import { ChipsInputProps, NsButton, NsCheckboxGroup, NsChip, NsPopover } from '../../../../components'
import { UniDataItem } from '../../../../shared'
import { FullValidationRule } from '../../../../props/field'
import { renderFormItem } from '../../utils'

export const ChipsInput = (props: ChipsInputProps, { emit, slots }: SetupContext) => {
  const options = props.options || []

  const onItemClick = (item: UniDataItem) => {
    const value = props.modelValue || [],
      itemIncludes = value.includes(`${item.value}`),
      newValue = itemIncludes
        ? value.filter((a) => a !== `${item.value}`)
        : Array.from(new Set([...value, `${item.value}`]))
    props['onUpdate:modelValue']?.(newValue)
  }

  let defaultSlot: () => VNode | VNode[]

  // 可下拉选择模式时
  if (props.dropdown) {
    const selectedSlot = options
      .filter((o) => props.modelValue?.includes(o.value as string))
      .map((o) => {
        return h(NsChip, {
          class: ['selected'],
          color: 'primary',
          variant: props.variant,
          label: o.label,
          onClick: () => onItemClick(o)
        })
      })
    defaultSlot = () => h(
      'div',
      {
        class: 'ns-chips-dropdown-default'
      },
      [
        selectedSlot,
        h(NsButton, {
          round: false,
          label: '+ 添加',
          variant: 'outlined',
          color: 'primary',
          size: 'sm',
          style: {
            'margin-left': '5px'
          }
        }, () => h(
          NsPopover,
          {
            'overlay-class-name': 'ns-chips-popover',
            trigger: 'click',
            light: true,
          },
          [
            h('h3', {}, `${props.label}选择`),
            h(NsCheckboxGroup, {
              modelValue: props.modelValue || [],
              options: options || [],
              light: true,
              // label: props.label,
              // @ts-ignore
              onChange: (value: string[]) => {
                Array.isArray(value) && emit('update:modelValue', value)
              }
            })
          ]
        ))
      ]
    )

  } else {
    defaultSlot = () => options.map((o) => {
      const on = props.modelValue && props.modelValue.includes(o.value as string)
      return h(NsChip, {
        class: on ? ['active'] : [],
        color: props.color || 'primary',
        variant: props.variant || 'outlined',
        label: o.label,
        onClick: () => onItemClick(o)
      })
    })
  }

  return renderFormItem (
    props, slots, defaultSlot,
  )
}
