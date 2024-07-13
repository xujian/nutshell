import { h, SetupContext } from 'vue'
import { DescriptionsItem } from 'ant-design-vue'
import { FactsItemProps } from '../../../../components'

export const FactsItem = (props: FactsItemProps, { slots }: SetupContext) => {

  return h(DescriptionsItem, {
    class: [
      'ns-facts-item',
      ...props.direction ? [`direction-${props.direction}`] : []
    ],
    label: props.label,
    span: props.span,
  }, slots)
}
