import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, ref, computed } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { NsSwitch } from '../switch'
import { useModelValuePropsForStringArray } from '../../props'
import { define, MakePropsType } from '../../utils'
import { NsTableColumnSelectorItem } from './TableColumnSelectorItem'
import { NsButton } from '../button'
import { TableColumnDefinition } from './Table'
import { TableColumnFixed } from '.'
import { NsDivider } from '../divider'
import { NsInput } from '../input'

export const tableColumnSelectorProps = {
  columns: {
    type: Array as PropType<TableColumnDefinition[]>,
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
  fixed?: TableColumnFixed,
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

    // 按照原始顺序给字段加上排序字段 order
    const fullItems: TableColumnSelectorItem[] = props.columns.map(
      (c: TableColumnDefinition, index: number) => ({
        label: c.label,
        fixed: c.props.fixed,
        order: index * 100,
      }))
    // 固定字段
    // 不能拖动
    // 可关闭
    const fixedItems = ref<TableColumnSelectorItem[]>(
        fullItems.filter(item => !!item.fixed) || []
      ),
      sortableItems = ref<TableColumnSelectorItem[]>(
        fullItems.filter(item =>
          props.modelValue?.includes(item.label) &&
          item.fixed === void 0
        )!
      ),
      // 隐藏字段
      // 初始值怎么算的
      // 从全体 columns 里找出未包含在 modelValue 的项
      hiddenItems = ref<TableColumnSelectorItem[]>(
        fullItems.filter(item => !props.modelValue?.includes(item.label)) || []
      )

    const onSortableItemChange = (label: string) => {
      if (props.modelValue?.length === 1) {
        return
      }
      const item = sortableItems.value.find(i => i.label === label)!
      const newValue = sortableItems.value.filter(item => item.label !== label)
      sortableItems.value = newValue
      hiddenItems.value = [
        ...hiddenItems.value,
        item
      ].sort((a, b) => a.order - b.order)
      console.log('===hiddenItems.value', item, hiddenItems.value)
    }

    // 隐藏字段改成可见
    const onHiddenItemChange = (label: string) => {
      const item = hiddenItems.value.find(i => i.label === label)!
      if (item.fixed) {
        fixedItems.value = [
          ...fixedItems.value,
          item
        ].sort((a, b) => a.order - b.order)
      } else {
        sortableItems.value = [
          ...sortableItems.value,
          item
        ].sort((a, b) => a.order - b.order)
      }
      hiddenItems.value = hiddenItems.value.filter(i => i !== item)
    }

    // 隐藏字段改成可见
    const onFixedItemChange = (label: string) => {
      const item = fixedItems.value.find(i => i.label === label)!
      hiddenItems.value = [
        ...hiddenItems.value,
        item
      ].sort((a, b) => a.order - b.order)
      fixedItems.value = fixedItems.value.filter(i => i !== item)
    }

    // 拖动排序后的处理过程
    const reSortsortableItems = (items: TableColumnSelectorItem[]) => {
      console.log('===items', items)
      const v = [
        ...items
      ].map((item, index: number) => ({
        label: item.label,
        order: index * 100
      }))
      sortableItems.value = v
    }

    return () => {
      const visibleList = h(
        VueDraggable,
        {
          class: 'column-list',
          modelValue: sortableItems.value,
          'onUpdate:modelValue': reSortsortableItems,
          animation: 150
        },
        () =>
          sortableItems.value?.map((item) =>
            h(NsTableColumnSelectorItem, {
              label: item.label,
              selected: sortableItems.value.includes(item),
              onChange: onSortableItemChange
            })
          )
      )

      const renderFixedItem = (item: TableColumnSelectorItem) =>
        h(NsTableColumnSelectorItem, {
          label: item.label,
          hasHandler: false,
          disabled: true,
          selected: hiddenItems.value.findIndex((i) => i.label === item.label) === -1,
          onChange: onFixedItemChange
        })

      const renderHiddenItem = (item: TableColumnSelectorItem) =>
        h(NsTableColumnSelectorItem, {
          label: item.label,
          hasHandler: false,
          selected: hiddenItems.value.findIndex((i) => i.label === item.label) === -1,
          onChange: onHiddenItemChange
        })

      const topFixedList = h(
          'div',
          {
            class: ['fiexed-list']
          },
          fixedItems.value.filter((i) => i.fixed === 'left').map(renderFixedItem)
        ),
        bottomFixedList = h(
          'div',
          {
            class: ['fiexed-list']
          },
          fixedItems.value.filter((i) => i.fixed === 'right').map(renderFixedItem)
        ),
        hiddenList = h(
          'div',
          {
            class: ['hidden-list']
          },
          hiddenItems.value.map(renderHiddenItem)
        )

      const onOk = () => {
        const value = [
          ...fixedItems.value.filter((i) => i.fixed == 'left'),
          ...sortableItems.value,
          ...fixedItems.value.filter((i) => i.fixed == 'right')
        ].map((item) => item.label)
        props['onUpdate:modelValue']?.(value)
      }

      const footer = h(
        'div',
        {
          class: ['footer', 'row', 'justify-end']
        },
        h(NsButton, {
          color: 'primary',
          size: 'sm',
          label: '确定',
          onClick: onOk
        })
      )

      return h(
        'div',
        {
          class: 'ns-table-column-control'
        },
        [
          h('div', { class: 'ns-table-column-control-header' }, [
            h('span', { class: 'ns-table-column-control-header-tit' }, '设置表头显示字段'),
            h(NsButton, {
              label: '重置',
              variant: 'plain',
              color: 'primary'
            })
          ]),
          h(
            NsInput,
            { placeholder: '搜索', fill: '#fff' },
            {
              prepend: () =>
                h('i', {
                  class: ['ns-icon', 'ns-icon-search']
                })
            }
          ),
          h(NsDivider, { fill: 'rgba(53, 53, 53, 0.2)' }),
          topFixedList,
          visibleList,
          bottomFixedList,
          hiddenItems.value.length
            ? h(
                NsDivider,
                { fill: 'rgba(53, 53, 53, 0.2)', style: { 'font-size': '12px' } },
                '隐藏字段'
              )
            : null,
          hiddenList,
          footer
        ]
      )
    }
  }
})
