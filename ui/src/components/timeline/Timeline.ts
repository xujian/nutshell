import { PropType, ObjectEmitsOptions, SlotsType, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'

export type TimelineStatus = 'normal' | 'on' | 'off'

export type TimelineItem = {
  title: string,
  caption: string,
  time: string | number,
  description: string,
  status: TimelineStatus,
}

export const timelineProps = {
  items: {
    type: Array as PropType<TimelineItem[]>
  }
}

export type TimelineEmits = {
}

const timelineEmits: TimelineEmits = {
}

export type TimelineSlots = {
  dot: ({item}: {item: TimelineItem}) => VNode
}

export type TimelineProps = MakePropsType<typeof timelineProps, TimelineEmits>

/**
 *  时间轴组件 <ns-timeline>
 */
export const NsTimeline = define({
  name: 'NsTimeline',
  props: timelineProps,
  emits: timelineEmits,
  setup (props, ctx) {
    return {
    }
  }
})
