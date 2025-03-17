import { h, SetupContext, VNode } from 'vue'
import { Timeline as AntdvTimeline, TimelineItem as AntdvTimelineItem } from 'ant-design-vue'
import { TimelineItem, TimelineProps } from '../../../../components'

function transformItemsToSlots (data: TimelineItem[], slots: SetupContext['slots']): VNode[] {

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

  return data.map(item => {

    // 把 <ns-timeline><#dot> 提供给 AntdvTimeline 的 #dot slot
    const dot = slots.dot
      ? () => slots.dot?.({item})
      : null

    const defaultSlot = () => h('div', {
        class: [
          'timeline-item-content',
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
          ]
      )

    return h(AntdvTimelineItem, {
      color: item.status === 'off' ? 'gray' : '',
      class: [
        'timeline-item',
        `status-${item.status || 'normal'}`
      ]
    }, {
        default: defaultSlot,
        dot,
      })
    })
}


export const Timeline = (props: TimelineProps, { slots, emit }: SetupContext) => {

  const items = transformItemsToSlots(props.data || [], slots)

  return h(AntdvTimeline, {
  }, {
    default: () => items,
  })
}
// + import => ./index.ts, ../components.ts
