import { TableColumnCustomEmits, TableColumnCustomProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table column: custom
 * @param column 
 * @param custom 
 */
export default function custom (
    props: TableColumnCustomProps, ctx: { slots: any}
  ) {
    return ({text, record, index}) => h('div', {
    }, ctx.slots.content(record))
}