import { h, SetupContext, VNode } from 'vue'
import { Timeline as AntdvTimeline, TimelineItem as AntdvTimelineItem } from 'ant-design-vue'
import { TimelineItem, TimelineProps } from '../../../../components'

function transformItemsToSlots (items: TimelineItem[], slots: SetupContext['slots']): VNode[] {

  const title = (item: TimelineItem) => h('div', {
    class: ['title'],
  }, item.title),
    time = (item: TimelineItem) => h('div', {
      class: ['time', 'number'],
    }, item.time),
    caption = (item: TimelineItem) => h('div', {
      class: ['caption'],
    }, item.caption),
    content = (item: TimelineItem) => slots.content
      ? slots.content({item})
      : null

  return items.map(item => {

    return h(AntdvTimelineItem, {
      color: item.status === 'off' ? 'gray' : ''
    }, () => h('div', {
        class: [
          'timeline-item-content',
          `status-${item.status || 'normal'}`
        ]
      }, [
        title(item),
        // content slot 与 time/caption 互斥
        ...slots.content
          ? [
              content(item),
            ]
          : [
              time(item),
              caption(item),
            ]
      ]))
    })
}


export const Timeline = (props: TimelineProps, { slots, emit }: SetupContext) => {

  const items = transformItemsToSlots(props.items || [], slots)

  return h(AntdvTimeline, {
    class: 'ns-timeline',
  }, () => items)
}
// + import => ./index.ts, ../components.ts
