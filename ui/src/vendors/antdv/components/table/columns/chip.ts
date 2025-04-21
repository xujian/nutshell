import { NsChip, TableColumnChipProps, TableColumnData } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column
 * @param props
 */
export default function chip (props: TableColumnChipProps) {
  const style = props.extraStyle
  return ({value, row, rowIndex}: TableColumnData) => h(NsChip, {
    label: value as string,
    variant:  props.variant ?? 'outlined',
    color: props.color ?? 'primary',
    ...style && {
        style: typeof style === 'string'
          ? style
          : style(value, row)
    }
  })
}
