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
    return ({value, row}: TableColumnData, ctx?: SetupContext) => {
      console.log('000', ctx?.slots, value)
      return h('div', 
        {
          class: 'table-column-custom-content'
        },
        ctx?.slots && ctx.slots.content?.(row)
      )
    }
}