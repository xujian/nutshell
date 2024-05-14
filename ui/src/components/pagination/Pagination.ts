import { PropType } from 'vue'
import { MakePropsType, define } from '../../utils'
import { useModelValuePropsForInput, usePaginationProps } from '../../props'

export const paginationProps = {
  ...useModelValuePropsForInput(),
  ...usePaginationProps(),
}

export type PaginationEmits = {
  change: (value: number) => void
}

const paginationEmits: PaginationEmits = {
  change: (value: number) => void 0,
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
