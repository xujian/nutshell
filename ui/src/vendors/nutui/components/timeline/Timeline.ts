import { h, SetupContext, VNode } from 'vue'
import { TimelineItem, TimelineProps } from '../../../../components'

function transformItemsToSlots (items: TimelineItem[], slots: SetupContext['slots']): VNode[] {

  const title = (item: any) => slots.title
    ? slots.title({item})
    : h('div', {
        class: 'timeline-title'
      }, item.title)

  return items.map(item => {
    return h(NutStep, {
      class: [
        'timeline-item',
        `status-${item.status || 'normal'}`
      ]
    }, {
        content: () => h('div', {
            class: ['timeline-content']
          }, slots.content?.({item})),
        title: () => title(item)
      })
    })
}


export const Timeline = (props: TimelineProps, { slots, emit }: Omit<SetupContext, 'expose'>) => {

  const items = transformItemsToSlots(props.items || [], slots)

  return h(NutSteps, {
    current: 1,
    direction: 'vertical',
    'progress-dot': true
  }, {
    default: () => items,
  })
}
