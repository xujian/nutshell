import { h, SetupContext } from 'vue'
import { FactsItemProps, FactsProps } from '../../../../components'



export const FactsItem = (props: FactsItemProps, ctx: Omit<SetupContext, 'expose'>) => {

  const content = ctx.slots.default ||
    (() => props.value)

  return h('div', {
    class: ['item', 'row', 'align-center', 'justify-between', 'font-sm']
  }, [
    h('div', {
        class: ['label']
      }, props.label),
    h('div', {
        class: ['value']
      }, {
        default: content
      })
    ]
  )
}

export const Facts = (props: FactsProps, ctx: Omit<SetupContext, 'expose'>) => {

  console.log('===Facts', props.items, ctx.slots.default)
  const slots = ctx.slots.default
    || (() => props.items?.map((item) => h(FactsItem, item.props)))

  return h('div', {
    class: 'ns-facts',
  }, {
      default: slots
    }
  )
}
