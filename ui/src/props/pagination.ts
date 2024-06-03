import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'

export const usePaginationProps = buildProps({
  current: {
    type: Number,
    default: 1,
  },
  /**
   * 总条数
   */
  total: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 20
  },
  /**
   * 可变更每页数据数
   */
  pageSizeChangable: {
    type: Boolean,
    default: true
  },
  jumpable: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  pageSizeOptions: {
    type: Array as PropType<string[]>,
    default: ['10', '20', '50', '100']
  },
  autoHide: {
    type: Boolean,
    default: true,
  }
})
