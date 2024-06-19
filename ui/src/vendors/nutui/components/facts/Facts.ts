import { h, SetupContext } from 'vue'
import { FactsProps } from '../../../../components'
import { UniDataItem } from 'src/shared'

export const Facts = (props: FactsProps, ctx: Omit<SetupContext, 'expose'>) => {

  const item = (d: UniDataItem) => h('div', {
      class: ['item', 'row', 'align-center', 'justify-between', 'font-sm']
    }, [
      h('div', {
          class: ['label']
        }, d.label),
      h('div', {
          class: ['value']
        }, d.value)
      ]
  )

  return h('div', {
    class: 'ns-facts',
  }, props.items?.map(item))
}

