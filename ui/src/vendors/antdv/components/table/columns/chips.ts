import { LabelValuePair } from '../../../../../shared/models'
import { NsChip, TableColumnChipProps, TableColumnData } from '../../../../../components'
import { h } from 'vue'

/**
 * Table custom column: chip
 * @param column
 * @param props
 */
export default function chip (props: TableColumnChipProps) {
  const style = props.extraStyle
  const chip = (value: LabelValuePair, row: Record<string, any>) => h(NsChip, {
    label: value.label,
    color: props.color ?? 'primary',
    ...style && {
        style: typeof style === 'string'
          ? style
          : style(value.label, row)
    }
  }, () => value.label)
  return ({value, row, rowIndex}: TableColumnData) => {
    let v: string | string[] = value || []
    const items: LabelValuePair[] = typeof v === 'string'
      // 支持两种格式的 value
      // 1. 逗号分隔的字符串
      // 2. 字符串数组
      // 3. label/value 数组
      ? v.split(',').map(t => ({
          label: t,
          value: t
        }))
      : v.map(v =>
        typeof v === 'string'
          ? { label: v, value: v }
          : v
      )
    return items.map(item => chip(item, row))
  }
}
