import { TableColumnComponentProps, TableColumnCustomProps } from '../../../../../components'
import { SetupContext, h } from 'vue'

/**
 * Table column: custom
 * @param column 
 * @param custom 
 */
export default function custom (
    props: TableColumnCustomProps, ctx?: SetupContext
  ) {
    return ({text, record, index}: TableColumnComponentProps) => h('div', {
    }, ctx?.slots && ctx.slots.content?.(record))
}