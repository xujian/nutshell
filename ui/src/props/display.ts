import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'

export type Display = 'list' | 'grid'

const displayProps = {
  /**
   * 排列
   */
  display: {
    type: String as PropType<Display>,
  },
}

export const useDisplayProps = buildProps(displayProps)
