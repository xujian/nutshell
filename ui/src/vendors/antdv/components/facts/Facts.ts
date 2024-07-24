import { h, SetupContext } from 'vue'
import { Descriptions, DescriptionsItem } from 'ant-design-vue'
import { FactsProps } from '../../../../components'
import { MarginProps } from '../../../../utils'

export const Facts = (props: FactsProps & MarginProps, ctx: SetupContext) => {

  const items = props.items || []

  const slots = items.length !== 0
    ? items.map(item => h(DescriptionsItem, {
        label: item.label,
        span: item.span ?? 1,
      }, () => item.value))
    : ctx.slots

  return h(Descriptions, {
    class: [
      'ns-facts'
    ],
    bordered: true,
    // 纵向排列
    column: props.direction === 'column' ? 1 : 3
  }, slots)
}
