import { h, SetupContext } from 'vue'
import { Descriptions, DescriptionsItem } from 'ant-design-vue'
import { FactsProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Facts = (props: FactsProps & MarginProps, ctx: SetupContext) => {

  const items = props.items || [],
    count = items.length || 3,
    column = props.columns
      || (props.vertical === true
        ? count
        : props.direction === 'column' ? 1 : 3)



  const slots = items.length !== 0
    ? () => items.map(item => h(DescriptionsItem, {
          label: item.label,
          span: item.span ?? 1,
        }, () => ctx.slots.item
          ? ctx.slots.item(item)
          : item.value
        )
      )
    : ctx.slots

  return h(Descriptions, {
    class: [
      'ns-facts',
      ...props.vertical ? ['vertical'] : ['horizontal'],
      `direction-${props.direction || 'row'}`,
      `columns-${column}`,
    ],
    bordered: true,
    layout: props.vertical === true
      ? 'vertical'
      : 'horizontal',
    column
  }, slots)
}
