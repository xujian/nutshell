import { SetupContext, computed, h,VNode, ref } from 'vue'
import { VxeTable, VxeColumn, VxeColumnProps, VxeColumnPropTypes, VxeTableEvents, VxeTableInstance } from 'vxe-table'
import { CustomColumnFunctionalRender, TableColumnData, TableProps, type NsTableColumnCheckbox } from '../../../../components'
// import type { ColumnsType, ColumnType } from 'ant-design-vue/es/table'
import columnCustomRenders from './columns'
import { MarginProps } from '../../../../utils'

type ColumnConfig = {
  props: VxeColumnProps,
  slots: {
    default?: (args: TableColumnData) => VNode
  }
}

const columnTypeMapping: { [key: string]: VxeColumnPropTypes.Type } = {
  number: 'seq',
  checkbox: 'checkbox'
}

const columnNameToTypeMapping: {[key: string]: VxeColumnPropTypes.Type} = {
  checkbox: 'checkbox',
}

export const Table = (props: TableProps & MarginProps, ctx: SetupContext) => {

  const classes = [
    'ns-table',
    ...props.classes || [],
  ].join(' ')

  const tableRef = ref<VxeTableInstance | null>(null)

  // 用来处理复选框逻辑
  const selectionOptions = {
    field: '',
    onChange: (selected: any[]) => {}
  }

  /**
   * 为 VxeTable 构造volumns
   * @param customColumns
   */
  function buildFinalColumns (): VNode[] {
    const result: VNode[] = []
    for (const column of props.columns!) {
      const { props } = column
      if (props.hidden) continue

      // NsTableColumn 的属性 转换为-> VxeColumn 的属性
      const colummConfig: ColumnConfig = {
        props: {
          ...props.field && {field: props.field},
          width: props.fixed ? props.width : undefined,
          minWidth: props.width,
          title: props.label,
          align: props.align,
          sortable: props.sortable,
          filters: props.filterable,
          fixed: props.fixed as VxeColumnPropTypes.Fixed,
          treeNode: props.tree
        },
        slots: {}
      }
      if (column.type) {
        // 输出 <vxe-column type=checkbox> 以及其他
        colummConfig.props.type = columnTypeMapping[column.type]
        if (column.type == 'checkbox') {
          selectionOptions.field = column.props.field || ''
          selectionOptions.onChange = (selected: any) => {
            column.props['onChange']?.(selected)
          }
        }
      }
      if (column.name) { // 带有 name 调用 columns/之下的渲染器
        // 某些 column name 映射为 vxe table type
        // 例如 checkbox
        if (column.name in columnNameToTypeMapping) {
          colummConfig.props.type = columnNameToTypeMapping[column.name]
          if (column.name === 'checkbox') {
            selectionOptions.field = column.props.field || ''
            selectionOptions.onChange = (selected: any) => {
              column.props['onChange']?.(selected)
            }
          }
        }
        // columns 目录里的 function
        const predefinedColumn = columnCustomRenders[column.name]
        if (predefinedColumn) {
          const predefinedColumnRender = predefinedColumn(props, ctx) as CustomColumnFunctionalRender
          colummConfig.slots = {
            // 所有 ns-table-column-xxx 都用 template 来实现
            // button/rating 使用组件库核心组件
            // 不用 VXE 提供的现成列
            default: ({row, rowIndex, columnIndex}) => {
              return h('div', {
                class: [
                  'table-column',
                  `table-column-${column.name}`
                ]
              },
              h(predefinedColumnRender, {
                value: row[column.props.field!],
                row,
                rowIndex,
                columnIndex,
              }, column.slots || {} ))
            }
          }
        }
      }
      const node = h(VxeColumn, colummConfig.props, colummConfig.slots)
      result.push(node)
    }
    return result
  }

  const rows = computed(() => props?.rows?.map((row, rowIndex: number) => ({
    ...row,
  })))

  let columns = buildFinalColumns()

  // 处理行选中事件
  const onSelectedChange: VxeTableEvents.CheckboxChange = (checked) => {
    // 拿到所有选中行数据
    let selected = tableRef.value?.getCheckboxRecords() || []
    // 解释以下逻辑
    // 1. 当表格添加了 checkbox 列时，将改动 selectionOptions 内的配置
    // 2. <ns-table-column-checkbox> 给了 field 属性时, 仅输出该列的值
    // 3. 没有给定 field 属性时，返回全部的 row 数据
    // 4. 将 checkbox 列给出的 v-model 回写选中行的数据
    const { field, onChange } = selectionOptions
    if (field) {
      selected = selected.map(r => r[field])
    }
    onChange(selected)
  }

  return h(VxeTable, {
      ref: tableRef,
      class: classes,
      data: rows.value,
      maxHeight: props.maxHeight,
      // columns: columns as ColumnsType,
      rowConfig: {
        useKey: true,
        keyField: props.rowKey,
        isHover: !props.rowHoverable === false,
        height: props.rowHeight
      },
      treeConfig: {
        transform: props.treeConfig?.enable,
        rowField: 'id',
        parentField: 'parentId'
      },
      loading: props.loading,
      columnConfig: {
        useKey: true,
        resizable: true
      },
      editConfig: {
        mode: 'row'
      },
      checkboxConfig: {
        checkStrictly: props.treeConfig?.checkStrictly
      },
      showOverflow: props.overflow === true ? false : true,
      scrollY: { enabled: true, gt: 20 },
      onCheckboxChange: onSelectedChange,
      onCheckboxAll: onSelectedChange
      // loading: loading,
      // pagination: false,
      // rowKey: props.rowKey,
      // rowSelection
    }, () => columns)
}
