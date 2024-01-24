import { TableColumnData, TableColumnCustomProps, CustomColumnSlots, TableColumnInfo } from '../../../../../components'
import { SetupContext, h } from 'vue'

/**
 * Table column: custom
 * @param column
 * @param custom
 */
export default function custom (
    props: TableColumnCustomProps
  ): CustomColumnSlots {
    // Design Update
    // 2024-1-23 增加新的返回格式
    // { content: VNode, header: VNode }
    // 可分别返回 slots: content, header 定义自定义列头
    return {
      content: ({row, rowIndex, columnIndex}: TableColumnData, ctx?: SetupContext) => {
        // console.log('custom----table c0olumn', ctx?.slots, row, rowIndex, columnIndex)
        // Design UPdate 2024-1-23
        // 返回格式为 slots 定义或 VNodes
        return h('div',
          {
            class: 'table-column-custom-content',
          },
          ctx?.slots?.content?.({row, rowIndex, columnIndex})
        )
      },
      header: ({column, columnIndex}: TableColumnInfo, ctx?: SetupContext) => {
        return h('div',
          {
            class: 'table-column-custom-header',
          },
          ctx?.slots?.header
            ? ctx?.slots?.header?.({column, columnIndex})
            : h('div', {
              class: 'vxe-cell--title'
            }, column?.label)
        )
      },
    }
}
