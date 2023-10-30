import { TableColumnData, TableColumnCustomProps } from '../../../../../components'
import { SetupContext, h } from 'vue'

/**
 * Table column: custom
 * @param column 
 * @param custom 
 */
export default function custom (
    props: TableColumnCustomProps, ctx?: SetupContext
  ) {
    return ({value, row, index}: TableColumnData) => h('div', {
    }, ctx?.slots && ctx.slots.content?.(row))
}