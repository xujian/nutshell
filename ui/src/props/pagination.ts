import { PropType } from 'vue'
import { buildProps } from '../utils/private/props'
import { PaginationProps } from '../components'

export const usePaginationProps = buildProps({
  /**
   * 自带分页
   */
  hasPagination: {
    type: Boolean,
    default: false,
  },
  totalPages: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 20
  },
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
  }
})
