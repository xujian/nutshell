import dayjs from 'dayjs'
import { NsButton, TableColumnButtonEmits, TableColumnButtonProps } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: button
 * @param column 
 * @param custom 
 */
export default function button (
    props: TableColumnDatetimeProps,
  ) {
  const formatRangedDateTime = (input: number | string): string => {
    if (!input) return ''
    const timeValue = dayjs(+input),
      date = timeValue.format('YYYY-MM-DD HH:MM')
    return `${date}`
  }
  return ({text, record, index}) => h('div', {
    class: ['number', 'datetime'],
  }, formatRangedDateTime(text))
}