import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../utils'
import { useModelValuePropsForInput } from '../../props'

export const paginationProps = {
  ...useModelValuePropsForInput(),
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 0
  },
  showSizeChanger: {
    type: Boolean,
    default: true
  },
  showQuickJumper: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  pageSizeOptions: {
    type: Array as PropType<string[]>,
    default: undefined
  }
}

export type PaginationProps = ExtractPublicPropTypes<typeof paginationProps>

export type PaginationEmits = {
  'update:modelValue': (value: boolean) => void
}

const paginationEmits: PaginationEmits = {
  'update:modelValue': (value: boolean) => void 0,
}

export const NsPagination = define({
  name: 'NsPagination',
  props: paginationProps,
  emits: paginationEmits,
  // @ts-ignore
  setup(props) {
    return {}
  }
})
