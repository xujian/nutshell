import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref, computed } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { NsSwitch } from '../switch'
import { useModelValuePropsForStringArray } from '../../props'
import { define, MakePropsType } from '../../utils'
import { NsTableColumnSelectorItem } from './TableColumnSelectorItem'
import { NsButton } from '../button'

export const tableColumnSelectorProps = {
  columns: {
    type: Array<string>,
    default: [],
  },
  ...useModelValuePropsForStringArray()
}

export type TableColumnSelectorEmits = {
  change: (column: string) => void
}

const emits: TableColumnSelectorEmits = {
  change: (column: string) => void 0
}

export type TableColumnSelectorSlots = {
  default: never,
}

export type TableColumnSelectorProps = MakePropsType<typeof tableColumnSelectorProps, TableColumnSelectorEmits>

type TableColumnSelectorItem = {
  label: string,
  order: number
}

/**
 *  组件 <ns-table-column-selector>
 */
export const NsTableColumnSelector = defineComponent({
  name: 'NsTableColumnSelector',
  props: tableColumnSelectorProps,
  emits,
  setup (props, ctx) {

    const initialItems = props.modelValue || []

    // 按照原始顺序给字段加上排序字段 order
    const fullItems: TableColumnSelectorItem[] = props.columns.map(
      (c: string, index: number) => ({
        label: c,
        order: index * 100,
      }))
    const visibleItems = ref<TableColumnSelectorItem[]>(
      fullItems.filter(item => props.modelValue?.includes(item.label))!
    )
    // 隐藏字段
    // 初始值怎么算的
    // 从全体 columns 里找出未包含在 modelValue 的项
    const hiddenItems = ref<TableColumnSelectorItem[]>(
      fullItems.filter(item => !props.modelValue?.includes(item.label)) || []
    )

    const onVisibleItemChange = (label: string) => {
      if (props.modelValue?.length === 1) {
        return
      }
      const item = visibleItems.value.find(i => i.label === label)!
      const newValue = visibleItems.value.filter(item => item.label !== label)
      visibleItems.value = newValue
      hiddenItems.value = [
        ...hiddenItems.value,
        item
      ].sort((a, b) => a.order - b.order)
      console.log('===hiddenItems.value', item, hiddenItems.value)
    }

    const onHiddenItemChange = (label: string) => {
      const item = hiddenItems.value.find(i => i.label === label)!
      visibleItems.value = [
        ...visibleItems.value,
        item
      ].sort((a, b) => a.order - b.order)
      hiddenItems.value = hiddenItems.value.filter(i => i !== item)
    }

    return () => {
      const visibleList = h(VueDraggable, {
        class: 'column-list',
        modelValue: visibleItems.value,
        animation: 150,
      }, () => visibleItems.value?.map(
        item => h(NsTableColumnSelectorItem, {
          label: item.label,
          selected: visibleItems.value.includes(item),
          onChange: onVisibleItemChange,
        })
      )
    )

    const hiddenList = h('div', {
      class: [
        'hidden-list',
      ]
    }, hiddenItems.value.map(item => h(NsTableColumnSelectorItem, {
      label: item.label,
      hasHandler: false,
      selected: visibleItems.value.includes(item),
      onChange: onHiddenItemChange,
    })))

    const onOk = () => {
      const value = visibleItems.value.map(item => item.label)
      props['onUpdate:modelValue']?.(value)
    }

    const footer = h('div', {
      class: [
        'footer', 'row', 'justify-end'
      ]
    }, h(NsButton, {
      color: 'primary',
      size: 'sm',
      label: '确定',
      onClick: onOk
    }))

    return h('div', {
        class: 'ns-table-column-control',
      }, [
        h('h3', {}, '可见字段'),
        visibleList,
        hiddenItems.value.length ? h('h3', {}, '隐藏字段') : null,
        hiddenList,
        footer
      ])
    }
  }
})
