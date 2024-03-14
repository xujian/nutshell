import dayjs from 'dayjs'
import { TableColumnData, TableColumnDatetimeProps, tableColumnDatetimeProps as defaultProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: datetime
 * @param props
 */
export default function datetime (
    props: TableColumnDatetimeProps,
  ) {
    Object.keys(defaultProps)
      .forEach((k) => {
          const defaultValue = defaultProps[k].default
          if (typeof defaultValue !== 'undefined' && typeof props[k] === 'undefined') {
              props[k] = defaultValue
          }
      })
    const formatRangedDateTime = (input: number | string): string => {
    if (!input) return ''
    const timeValue = dayjs(input),
      date = timeValue.format(props.format)
    return `${date}`
  }
  return ({value, row, rowIndex}: TableColumnData) => h('div', {
    class: ['number', 'datetime'],
  }, formatRangedDateTime(value))
}
