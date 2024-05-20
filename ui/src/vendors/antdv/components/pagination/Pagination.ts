import { h, SetupContext } from 'vue'
import { Pagination as AntdvPagination } from 'ant-design-vue'
import { PaginationProps } from '../../../../components'

export const Pagination = (props: PaginationProps, ctx: SetupContext) => {
  const { emit } = ctx
  return h(
    AntdvPagination,
    {
      total: props.totalPages,
      pageSize: props.pageSize,
      onChange: (page: number, pageSize: number) => {
        props['onUpdate:modelValue']?.(page)
        // emit('change', page, pageSize)
      },
      // showSizeChanger: props.showSizeChanger,
      showQuickJumper: props.jumpable,
      disabled: props.disabled,
      showTotal: (total: number) => `共${total}条`,
      pageSizeOptions: props.pageSizeOptions
    },
    () => ''
  )
}
