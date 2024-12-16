import { h } from 'vue'
import { TableColumnData, TableColumnCurrencyProps, tableColumnDatetimeProps as defaultProps } from '../../../../../components'


/**
 * Table custom column: datetime
 * @param props
 */
export default function currency (
    props: TableColumnCurrencyProps,
  ) {
  const formatCurrency = (input: number | string): string => {
    if (input === void 0) return ''
    if (input === 0) return '0'
    let value = typeof input === 'string'
      ? +input
      : input
    if (props.unit === '万') {
      value = value / 1e4
    }
    if (props.unit === '亿') {
      value = value / 1e8
    }
    if (props.unit === '万亿') {
      value = value / 1e12
    }
    // const formatter = Intl.NumberFormat('zh-CN', {
    //   style: 'currency',
    //   currency: 'CNY',
    // })
    // const result = formatter.format(value)
    return (value).toLocaleString('en-US', {
      minimumFractionDigits: props.minimumFractionDigits,
      maximumFractionDigits: props.maximumFractionDigits,
    })
  }
  return ({value, row, rowIndex}: TableColumnData) => h('div', {
    class: ['number', 'currency'],
  }, formatCurrency(value))
}
