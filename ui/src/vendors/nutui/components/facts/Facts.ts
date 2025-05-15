import { h, SetupContext } from 'vue'
import { FactsItemProps, FactsProps } from '../../../../components'
import { MarginProps } from '../../../../utils'



export const FactsItem = (props: FactsItemProps, ctx: Omit<SetupContext, 'expose'>) => {

  const content = ctx.slots.default ||
    (() => props.value)

  return h('div', {
    class: [
      'item',
      ...props.direction ==='column'
        ? ['column', 'align-stretch', 'justify-start']
        : ['row', 'align-center', 'justify-between'],
      props.fontSize || 'font-sm'
    ]
  }, [
    h('div', {
        class: ['label']
      }, { default: () => props.label }),
    h('div', {
        class: ['value', 'row', 'justify-end']
      }, {
        default: content
      })
    ]
  )
}

export const Facts = (props: FactsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {
  const fontSize = props.fontSize
  const slots = ctx.slots.default
    || (() => props.items?.map((item) => h(FactsItem, {...item, fontSize} as FactsItemProps)))
  return h('div', {
    class: [
      'ns-facts',
    ],
  }, {
      default: slots
    }
  )
}
