import { PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { useModelValuePropsForInput, usePaginationProps } from '../../props'

export const paginationProps = {
  ...usePaginationProps(),
}

export type PaginationEmits = {
  change: (value: number) => void
}

export const paginationEmits: PaginationEmits = {
  change: (value: number) => {
    return true
  },
}

export type PaginationProps = MakePropsType<typeof paginationProps, PaginationEmits>

/**
 * 分页组件 <ns-pagination>
 */
export const NsPagination = define({
  name: 'NsPagination',
  props: paginationProps,
  emits: paginationEmits,
  // @ts-ignore
  setup(props) {
    return {}
  }
})
