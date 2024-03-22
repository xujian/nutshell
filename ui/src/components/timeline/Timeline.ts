import { PropType, ObjectEmitsOptions, SlotsType } from 'vue'
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
  item: never,
}

export type TimelineProps = MakePropsType<typeof timelineProps, TimelineEmits>

/**
 *  组件 <ns-timeline>
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
