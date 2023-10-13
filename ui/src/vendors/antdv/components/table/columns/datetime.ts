import dayjs from 'dayjs'
import { NsButton, TableColumnDatetimeEmits, TableColumnDatetimeProps, props as defaultProps } from '../../../../../components'
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
    const timeValue = dayjs(+input),
      date = timeValue.format(props.format)
    return `${date}`
  }
  return ({text, record, index}) => h('div', {
    class: ['number', 'datetime'],
  }, formatRangedDateTime(text))
}