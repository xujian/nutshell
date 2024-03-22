import { h, SetupContext } from 'vue'
import { Descriptions, DescriptionsItem } from 'ant-design-vue'
import { FactsProps } from '../../../../components'

export const Facts = (props: FactsProps, ctx: SetupContext) => {

  const items = props.items || []

  const slots = () => items.map(item => h(DescriptionsItem, {
    label: item.label,
    span: item.span ?? 1,
  }, () => item.value))

  return h(Descriptions, {
    class: 'ns-facts',
    bordered: true,
  }, slots)
}
// + import => ./index.ts, ../components.ts
