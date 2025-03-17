import { PropType, VNode } from 'vue'
import { define, MakePropsType } from '../../utils'
import { useModelValuePropsForNumber } from '../../props'

/**
 * 时间线的形态
 * 1. 点状
 * 2. 数字
 * 3. 图标
 * 4. 头像
 */
export type TimelineVariant = 'dot' | 'number' | 'icon' | 'avatar'

export type TimelineStatus = 'normal' | 'on' | 'off'

export type TimelineItem = {
  title: string,
  caption: string,
  time: string | number,
  icon: string,
  status: TimelineStatus,
  content: string
}

export const timelineProps = {
  ...useModelValuePropsForNumber(),
  /**
   * 时间线的形态
   */
  variant: {
    type: String as PropType<TimelineVariant>,
    default: 'dot'
  },
  icon: {
    type: String,
    default: 'circle'
  },
  dotted: {
    type: Boolean,
    default: false
  },
  data: {
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
