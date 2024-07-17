import { h, SetupContext, VNode } from 'vue'
import { TimelineItem, TimelineProps } from '../../../../components'

function transformItemsToSlots (items: TimelineItem[], slots: SetupContext['slots']): VNode[] {
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
        title: () => h('div', {
            class: 'timeline-title'
          }, item.title)
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
