import { h, SetupContext, VNode } from 'vue'
import { TimelineItem, TimelineProps } from '../../../../components/timeline'

function transformItemsToSlots (items: TimelineItem[], slots: SetupContext['slots']): VNode[] {

  const title = (item: any) => slots.title
    ? slots.title({item})
    : h('div', {
        class: 'timeline-title'
      }, item.title)

  const content = (item: TimelineItem) => [
    item.time
      ? h('div', {
          class: ['time']
        }, item.time)
      : null,
    item.caption
      ? h('div', {
          class: ['time']
        }, item.caption)
      : null
  ]

  return items.map(item => {
    return h(NutStep, {
      class: [
        'timeline-item',
        `status-${item.status || 'normal'}`
      ],
    }, {
        content: () => h('div', {
            class: ['timeline-content']
          }, {
            default: () => slots.content
              ? slots.content?.({item})
              : content(item)
          }),
        title: () => title(item)
      })
    })
}


export const Timeline = (props: TimelineProps, { slots, emit }: Omit<SetupContext, 'expose'>) => {

  const items = transformItemsToSlots(props.items || [], slots)

  return h(NutSteps, {
    current: props.modelValue,
    direction: 'vertical',
    'progress-dot': true
  }, {
    default: () => items,
  })
}
