import { h, SetupContext, VNode } from 'vue'
import { TimelineItem, TimelineProps } from '../../../../components/timeline'
import { NsIcon } from '../../../../components'

export const Timeline = (props: TimelineProps, { slots, emit }: Omit<SetupContext, 'expose'>) => {
  
  const transformItemsToSlots = (items: TimelineItem[], slots: SetupContext['slots']): VNode[] => {

    const title = (item: any) => slots.title
      ? slots.title({item})
      : h('div', {
          class: 'timeline-title'
        }, item.title)
  
    const content = (item: TimelineItem) => [
      item.time
        ? h('p', {
            class: ['time']
          }, item.time)
        : null,
      item.caption
        ? h('p', {
            class: ['caption', 'justify']
          }, item.caption)
        : null,
      item.content
        ? h('p', {
            class: ['content']
          }, item.content)
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
          title: () => title(item),
          icon: props.variant === 'icon'
            ? (() => h(NsIcon, {
                name: props.icon || item.icon || 'circle',
                class: ['timeline-icon']
              }))
            : null
        })
      })
  }

  const items = transformItemsToSlots(props.data || [], slots)

  return h(NutSteps, {
    current: props.modelValue,
    direction: 'vertical',
    progressDot: props.variant === 'dot',
    class: [
      ...props.dotted ? ['dotted'] : []
    ]
  }, {
    default: () => items,
  })
}
