import { ExtractPublicPropTypes, ObjectEmitsOptions } from 'vue'
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
    type: Array,
    default: undefined
  }
}

export type PaginationProps = ExtractPublicPropTypes<typeof paginationProps>

export interface PaginationEmits extends ObjectEmitsOptions {
  'update:modelValue': (value: boolean) => void
  onChange: (page: number, pageSize: number) => void
}

const paginationEmits: PaginationEmits = {
  'update:modelValue': (value: boolean) => void 0,
  onChange: (page: number, pageSize: number) => void 0
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
