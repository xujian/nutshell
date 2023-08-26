import { NsChip, TableColumnChipProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param custom 
 */
export default function chip (custom: TableColumnChipProps) {
  const style = custom.extraStyle
  return ({text, record, index}) => h(NsChip, {
    label: text as string,
    ...style && {
        style: typeof style === 'string'
          ? style
          : style(text, record)
    }
  }, () => text)
}