import { TableColumnData, TableColumnCustomProps, CustomColumnRender, CustomColumnFunctionalRender } from '../../../../../components'
import { SetupContext, h } from 'vue'

/**
 * Table column: custom
 * @param column 
 * @param custom 
 */
export default function custom (
    props: TableColumnCustomProps, ctx?: SetupContext
  ): CustomColumnFunctionalRender {
    return ({value, row}: TableColumnData) => h('div', 
      {},
      ctx?.slots && ctx.slots.content?.(row))
}