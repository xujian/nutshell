import { NsChip, TableColumnChipProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column 
 * @param props 
 */
export default function chip (props: TableColumnChipProps) {
  const style = props.extraStyle
  return ({text, record, index}) => h(NsChip, {
    label: text as string,
    ...style && {
        style: typeof style === 'string'
          ? style
          : style(text, record)
    }
  }, () => text)
}