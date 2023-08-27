import { NsIcon, TableColumnIconEmits, TableColumnIconProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: icon
 * @param column 
 * @param custom 
 */
export default function button (
    props: TableColumnIconProps,
    component: TableColumnIcon
  ) {
  return ({text, record, index}) => h(NsIcon, {
    source: props.source,
    color: props.color,
    onClick: () => {
      const value = text,
        row = record
      props.onClick({value, row})
    }
  }, () => text)
}