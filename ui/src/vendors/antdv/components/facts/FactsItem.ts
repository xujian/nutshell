import { h, SetupContext } from 'vue'
import { DescriptionsItem } from 'ant-design-vue'
import { FactsItemProps } from '../../../../components'

export const FactsItem = (props: FactsItemProps, { slots }: SetupContext) => {

  return h(DescriptionsItem, {
    class: [
      'ns-facts-item'
    ],
    label: props.label,
    span: props.span,
  }, slots)
}
