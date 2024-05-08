import { h, ref, SetupContext, VNode } from 'vue'
import { ChipsProps, NsButton, NsCheckboxGroup, NsChip, NsPopover } from '../../../../components'
import { UniDataItem } from '../../../../shared'
import { FullValidationRule } from '../../../../props/field'
import { transformRules } from '../input/rules'
import { renderFormItem } from '../../utils'

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

  const rules = transformRules(props.rules as FullValidationRule[])

  let defaultSlot: () => VNode | VNode[]

  // 可下拉选择模式时
  if (props.dropdown) {
    console.log(props.modelValue)
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
          size: 'xs',
          style: {
            'margin-left': '5px'
          }
        }, () => h(
          NsPopover,
          {
            'overlay-class-name': 'ns-chips-popover',
          },
          [
            h('h3', {}, `${props.label}选择`),
            h(NsCheckboxGroup, {
              modelValue: props.modelValue || [],
              options: options || [],
              label: props.label,
              onChange: (value: string[]) => {
                emit('update:modelValue', value)
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
        class: on ? ['selected'] : [],
        color: on ? 'primary' : 'neutral',
        variant: props.variant,
        label: o.label,
        onClick: () => onItemClick(o)
      })
    })
  }

  return renderFormItem (
    props, slots, defaultSlot,
  )
}
