import { NsIcon, TableColumnComponentProps, TableColumnIconEmits, TableColumnIconProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: icon
 * @param column 
 * @param custom 
 */
export default function icon (
    props: TableColumnIconProps,
  ) {
  return ({text, record, index}: TableColumnComponentProps) => h(NsIcon, {
    source: props.source,
    color: props.color,
    onClick: () => {
      const value = text,
        row = record
      props.onClick({value, row})
    }
  }, () => text)
}