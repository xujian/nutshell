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
      'font-sm'
    ]
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

export const Facts = (props: FactsProps & MarginProps, ctx: Omit<SetupContext, 'expose'>) => {

  const slots = ctx.slots.default
    || (() => props.items?.map((item) => h(FactsItem, item.props)))

  return h('div', {
    class: [
      'ns-facts',
      ...props.classes || [],
    ],
    styles: {
      ...props.style
    }
  }, {
      default: slots
    }
  )
}
