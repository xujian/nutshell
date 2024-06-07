import { defineComponent, h, SetupContext } from 'vue'
import { Pagination as AntdvPagination } from 'ant-design-vue'
import { paginationEmits, paginationProps, PaginationProps } from '../../../../components'

export const Pagination = defineComponent({
  name: 'AntdvPagination',
  props: paginationProps,
  emits: paginationEmits,
  setup (props: PaginationProps, { emit }: SetupContext) {
    return () =>
      props.autoHide && props.total === 0
        ? null
        : h(AntdvPagination,
          {
            total: props.total,
            current: +(props.current ?? 1),
            pageSize: props.pageSize,
            showSizeChanger: props.pageSizeChangable,
            onChange: (page: number, pageSize: number) => {
              emit('change', page, pageSize)
            },
            // showSizeChanger: props.showSizeChanger,
            showQuickJumper: props.jumpable,
            disabled: props.disabled,
            showTotal: (total: number) => `共${total}条`,
            pageSizeOptions: props.pageSizeOptions
          }
        )
  }
})
