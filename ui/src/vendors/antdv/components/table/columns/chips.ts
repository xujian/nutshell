import { h, ref } from 'vue'
import { Item } from '../../../../../shared/models'
import { NsButton, NsChip, NsMultipleSelect, TableColumnChipsProps, TableColumnData } from '../../../../../components'
import { NsEditable } from '../../../../../components/editable'

/**
 * Table custom column: chip
 * @param column
 * @param props
 */
export default function chips (props: TableColumnChipsProps) {
  const style = props.extraStyle
  const chip = (value: Item, row: Record<string, any>) => h(NsChip, {
    label: value.label,
    color: props.color ?? 'primary',
    ...style && {
        style: typeof style === 'string'
          ? style
          : style(value.label!, row)
    }
  }, () => value.label)
  return ({value, row, rowIndex}: TableColumnData) => {
    let v: string | string[] = value || []

    const editable = ref<typeof NsEditable>()

    const items: Item[] = typeof v === 'string'
        // 支持两种格式的 value
        // 1. 逗号分隔的字符串
        // 2. 字符串数组
        // 3. label/value 数组
        ? v.split(',').map(t => ({
            name: t,
            value: t
          }))
        : v.map(v =>
          typeof v === 'string'
            ? { name: v, value: v }
            : v)

    const select = () => h(NsMultipleSelect, {
          class: 'editable-edit-content',
          modelValue: items.map(i => `${i.value}`),
          name: 'chips',
          options: props.editableConfig?.options || [],
          width: 200,
        }),
      okButton = () => h('i', {
          class: ['icon icon-ok'],
          size: 'xs',
          onClick () {
            props.onEditComplete?.(items.map(i => `{i.value}`))
            editable.value?.exitEdit()
          }
        }),
      cancelButton = () => h('i', {
          class: ['icon icon-cancel'],
          size: 'xs',
          onClick () {
            editable.value?.exitEdit()
          }
        })
    return h(NsEditable, {
          ref: editable,
          class: [
            'table-column-editable',
          ]
        }, {
          display: () => h('div', {
            class: 'editable-display-content'
          }, items.map(item => chip(item, row))),
          edit: () => h('div', {
            class: [
              'editable-display-content',
              'row',
              'align-center'
            ]
          }, [
            select(),
            okButton(),
            cancelButton(),
          ])
        }
      )
  }
}
