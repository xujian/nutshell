import { TableColumnData, TableColumnCustomProps, CustomColumnRender, CustomColumnFunctionalRender } from '../../../../../components'
import { SetupContext, h } from 'vue'

/**
 * Table column: custom
 * @param column
 * @param custom
 */
export default function custom (
    props: TableColumnCustomProps
  ): CustomColumnFunctionalRender {
    return ({row, rowIndex, columnIndex}: TableColumnData, ctx?: SetupContext) => {
      // console.log('custom----table c0olumn', rowIndex, columnIndex)
      return h('div',
        {
          class: 'table-column-custom-content',
        },
        {
          default: () => ctx?.slots?.content?.({row, rowIndex, columnIndex})
        }
      )
    }
}
