import { TableColumnData, TableColumnDatetimeProps, tableColumnDatetimeProps as defaultProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: datetime
 * @param props
 */
export default function datetime (
    props: TableColumnDatetimeProps,
  ) {
    const dayjs = require('dayjs')
    Object.keys(defaultProps)
      .forEach((k) => {
          const defaultValue = Reflect.get(defaultProps, k).default
          if (typeof defaultValue !== 'undefined' && typeof Reflect.get(props, k) === 'undefined') {
              Reflect.set(defaultValue, k, defaultProps)
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
