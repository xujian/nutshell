import { buildProps } from '../utils/private/props'
import { PropType } from 'vue'

export type TriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const useTriggerProps = buildProps({
  /**
   * 触发行为
   */
  trigger: {
    type: String as PropType<TriggerType>,
    default: 'hover'
  }
})
