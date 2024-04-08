import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'

export type Direction = 'horizontal' | 'vertical'

const layoutProps = {
  /**
   * 排列
   */
  direction: {
    type: String as PropType<Direction>,
  },
}

export const useLayoutProps = buildProps(layoutProps)
