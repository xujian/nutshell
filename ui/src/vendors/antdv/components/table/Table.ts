import { SetupContext, computed, h,VNode, ref, reactive, defineComponent, getCurrentInstance } from 'vue'
import { VxeTable, VxeColumn, VxeColumnProps, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'
import type { VxeTableInstance, Column, VxeTablePropTypes } from 'vxe-table'
import type { CustomColumnFunctionalRender, TableColumnData, TableProps, CustomColumnSlots, TableColumnDefinition, TableColumnProps, TableFilterQuery, TableColumnFilterSettings } from '../../../../components'
import { NsPagination, isCustomColumnSlots, tableProps, NsTableColumnSelector, tableEmits  } from '../../../../components'
import columnCustomRenders from './columns'
import { MarginProps, marginProps } from '../../../../utils'
import { useNutshell } from '../../../../framework'
import { useRoute } from 'vue-router'
import { Borders } from '../../../../props'

type ColumnConfig = {
  props: VxeColumnProps,
  slots: {
    default?: (args: TableColumnData) => VNode,
    header?: (args: TableColumnData) => VNode,
  }
}

const columnNameToTypeMapping: {[key: string]: VxeColumnPropTypes.Type} = {
  number: 'seq',
  checkbox: 'checkbox',
}

/**
 * 映射边框线属性
 */
const bordersMapping: Record<Borders, VxeTablePropTypes.Border | undefined> = {
  all: 'full',
  // 暂时不支持
  vertical: void 0,
  horizonal: 'default',
  inner: 'inner',
  outer: 'outer',
  none: 'none'
}

export type TableState = {
  inited: boolean,
  visibleColumns: string[]
}

/**
 * 从 NsTable 拿到属性、
 * 行、列数据
 * 用第三方组件 (VxeTable) 绘制表格
 */
export const Table = defineComponent({
  name: 'NsTable',
  props: {
    ...tableProps,
    ...marginProps,
  },
  emits: tableEmits,
  setup (props: TableProps & MarginProps, ctx: SetupContext) {

    /**
     * 状态
     */
    const state = reactive<TableState>({
      inited: false,
      visibleColumns: []
    })

    // 可见列缓存
    const $route = useRoute(),
      routePath = $route.path,
      // 需要缓存可见列
      columnsCacheKey: string = props.cacheColumns
        ? `table-columns-${routePath.split('/').join('-')}-${props.cacheColumns}`
        : ''
    const $n = useNutshell()!

    const classes = [
      ...props.classes || [],
      ...props.hasPagination ? ['table-has-pagination'] : []
    ]

    // 改为使用从
    // const tableRef = ref<VxeTableInstance | null>(null)

    // 用来处理复选框逻辑
    const selectionOptions = {
      field: '',
      onChange: (selected: any[]) => {}
    }

    // 处理可见列
    // 1. 缓存到 local storage 里的列
    // 2. visibleColumns 属性给出的列
    // 3. hiddenColumns 给定的隐藏列
    // 4. 设定为 hidden 的 column
    // 以上几项存在设置冲突 按以上优先级
    const allColumns: TableColumnDefinition[] = props.columns || []
    let columnsNotHidden = allColumns
        // .filter(c => c.props.hidden !== true)
        //  || []
      if (props.visibleColumns?.length) {
        columnsNotHidden = columnsNotHidden.filter(c => props.visibleColumns?.includes(c.label))
      }
      if (props.hiddenColumns?.length) {
        columnsNotHidden = columnsNotHidden.filter(c => !props.hiddenColumns?.includes(c.label))
      }
    console.log('===columnsNotHidden', columnsNotHidden)
    const columnsCached = columnsCacheKey
        ? localStorage.getItem(columnsCacheKey) || ''
        : '',
      columnsNotHiddenNames = columnsCached
        ? columnsCached.split(',')
        : columnsNotHidden.map(c => c.label)
    if (!state.inited) {
      state.inited = true
      state.visibleColumns = columnsNotHiddenNames
    }

    const openColumnControl = () => {
      const a = $n.dialog({
        width: 250,
        component: NsTableColumnSelector,
        mask: false,
        footer: false,
        destroyOnClose: true,
        classes: ['ns-table-column-control-dialog'],
        onCancel: (): undefined => {
          document.querySelector('.ns-table-column-control-dialog')?.remove()
          console.log(state.visibleColumns, 'state.visibleColumns')
        },
        props: {
          columns: props.columns?.filter(column =>
            column.name !== 'checkbox'
          ),
          modelValue: state.visibleColumns,
          'onUpdate:modelValue': (labels: string[]) => {
            state.visibleColumns = labels
            localStorage.setItem(columnsCacheKey, labels.join(','))
          }
        }
      })
    }

    function onFilterChange ({filters}: any): boolean {
      const queries: TableFilterQuery[] = filters.map((f: any) => ({
        field: f.field,
        values: f.values
      }))
      props.filterHandler?.(queries)
      return true
    }


    const fills: Record<string, string> = {}

    /**
     * 为 VxeTable 构造volumns
     * @param customColumns
     */
    function buildFinalColumns (): VNode[] {
      const result: VNode[] = []
      let columns = allColumns || []

      /**
       * 过滤掉隐藏的列
       * @returns
       */
      const visibleColumnsFilter = (c: TableColumnDefinition) =>
        c.name === 'checkbox' ||
          state.visibleColumns.includes(c.label)

      // 如果有 visibleColumns
      // 对 columns 进行筛选和排序
      // 排序和筛选用 label 而不是 name
      if (state.visibleColumns.length) {
        columns = columns.filter(visibleColumnsFilter)
        columns.sort((c1, c2) =>
          state.visibleColumns.indexOf(c1.label) - state.visibleColumns.indexOf(c2.label)
        )
      }

      /**
       * 转换为
       * @param props
       * @returns
       */
      function buildFilterConfig (props: TableColumnProps): Partial<VxeColumnProps> {
        if (!props.filterable) {
          return {}
        }
        const result: Partial<VxeColumnProps> =  {
            filters: props.filterable.data || [],
          }
        return result
      }

      // 循环渲染表格列
      let columnCount = 0

      for (const column of columns) {

        if (column.props.fill) {
          fills[`--column-fill-${columnCount}`] = column.props.fill
        }

        // NsTableColumn 的属性 转换为-> VxeColumn 的属性
        const colummConfig: ColumnConfig = {
          props: {
            colId: column.label,
            ...column.props.field && {field: column.props.field},
            width: column.props.fixed ? column.props.width : undefined,
            minWidth: column.props.width,
            title: column.props.label,
            visible: column.props.hidden !== true,
            align: column.props.align,
            headerAlign: column.props.headerAlign,
            sortable: column.props.sortable,
            resizable: false,
            ...buildFilterConfig(column.props),
            fixed: column.props.fixed as VxeColumnPropTypes.Fixed,
            treeNode: column.props.tree,
            ...column.props.description && {
              titlePrefix: {
                content: column.props.description
              }
            },
            // 给列头加上特定的 css class
            headerClassName: [
              ...column.props.description ? ['has-description'] : [],
              // 输出 特定的 class 以便给单元格填色
              ...column.props.fill ? [`fill-${columnCount}`] : [],
            ].join(' '),
            // 给单元格加上特定的 css class
            className: [
              // 输出 特定的 class 以便给单元格填色
              ...column.props.fill
                ? [`fill-${columnCount}`]
                : []
            ].join(' '),
          },
          slots: {}
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
            const predefinedColumnRender = predefinedColumn(column.props, ctx) as CustomColumnFunctionalRender | CustomColumnSlots
            // 使用 type guard 判断返回格式是 CustomColumnSlots:
            if (!isCustomColumnSlots(predefinedColumnRender)) {
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
                    }, column.slots || {}))
                }
              }
            } else {
              colummConfig.slots = {
                // column content slot
                default: ({row, rowIndex, columnIndex}) => {
                  return h('div', {
                      class: [
                        'table-column',
                        `table-column-${column.name}`
                      ]
                    },
                    h(predefinedColumnRender.content, {
                      value: row[column.props.field!],
                      row,
                      rowIndex,
                      columnIndex,
                    }, column.slots || {}))
                }
              }

              const headerTailOptionsIcon =
                columnCount === columns.length -1
                  ? h ('i', {
                      class: [
                        'icon',
                        'icon-options',
                        'clickable'
                      ].join(' '),
                      onClick: openColumnControl
                    })
                  : null,
                // 显示 列操作 齿轮图标
                shouldDisplayColumnOptionsIcon = props.hasColumnControl && columnCount === columns.length -1

              // custom column header slot
              if (column?.slots?.hasOwnProperty('header') || shouldDisplayColumnOptionsIcon) {
                colummConfig.slots['header'] = ({columnIndex}) => {
                  return h('div', {
                      class: [
                        'table-column-header',
                        `table-column-${column.name}`,
                        'row', 'align-center', 'justify-between'
                      ]
                    }, [
                      // @ts-ignore
                    h(column.slots?.header || predefinedColumnRender.header, {
                      column: column.props,
                      columnIndex,
                    }),
                    headerTailOptionsIcon
                  ])
                }
              }
            }
            // 开始处理自定义列头筛选
            const filterable = column.props.filterable
            if (filterable && filterable.component) {
              // @ts-ignore
              colummConfig.slots['filter'] = ({columnIndex}) =>
                h('div',
                  {
                    class: ['table-column-custom-filter']
                  },
                  h(filterable.component, {
                    ...filterable.props,
                    modelValue: filterable.model.value,
                    'onUpdate:modelValue': (v: string[]) => {
                      filterable.model.value = v
                    }
                  })
                )
            }
          }
        }
        const node = h(VxeColumn, colummConfig.props, colummConfig.slots)
        result.push(node)
        columnCount ++
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
      let selected = vxeRef?.value?.getCheckboxRecords() || []
      // 解释以下逻辑
      // 1. 当表格添加了 checkbox 列时，将改动 selectionOptions 内的配置
      // 2. <ns-table-column-checkbox> 给了 field 属性时, 仅输出该列的值
      // 3. 没有给定 field 属性时，返回全部的 row 数据
      // 4. 将 checkbox 列给出的 v-model 回写选中行的数据
      const { field, onChange } = selectionOptions
      if (field) {
        selected = selected.map((r: any) => r[field])
      }
      onChange(selected)
    }

    // 用于 type=checkbox，手动清空用户的选择
    const clearChecked = () => {
      vxeRef?.value?.clearCheckboxRow()
      const { onChange } = selectionOptions
      onChange([])
    }

    const vxeRef = ref<any>(null)

    const border = computed(() => props.borders
      ? bordersMapping[props.borders]
      : void 0
    )

    /**
     * 合并行的规则配置
     */
    const spanMethod: VxeTablePropTypes.SpanMethod | undefined =
      props.mergingCells && props.mergingCells.length > 0
      // VxeTable 提供的行合并函数
      // 执行时机: 每一列的每一格
      ? ({row, _rowIndex, column, visibleData}) => {
        const fields = props.mergingCells!,
          field = column.field,
          value = row[field]
        if (value && fields.includes(field)) {
            let prevRow = visibleData[_rowIndex - 1],
              nextRow = visibleData[_rowIndex + 1]
            const master = props.mergingCellsMaster
            if (master) {
              // 按主列合并 mergingCellsMaster
              const master = props.mergingCellsMaster!
              if (
                prevRow &&
                  prevRow[master] === row[master] &&
                  prevRow[field] === value
                ) {
                return { rowspan: 0, colspan: 0 }
              } else {
                let rowCount = 1
                while (
                  nextRow &&
                  nextRow[master] === row[master] &&
                  nextRow[field] === value
                ) {
                  nextRow = visibleData[++rowCount + _rowIndex]
                }
                if (rowCount > 1) {
                  return { rowspan: rowCount, colspan: 1 }
                }
              }
            } else {
              // 按值合并, 没有主列
              // 能合并就合并
              if (prevRow && prevRow[field] === value) {
                return { rowspan: 0, colspan: 0 }
              } else {
                let rowCount = 1
                while (nextRow && nextRow[field] === value) {
                  nextRow = visibleData[++rowCount + _rowIndex]
                }
                if (rowCount > 1) {
                  return { rowspan: rowCount, colspan: 1 }
                }
              }
            }
          }
        }
      : void 0

    const vxe = () => h(VxeTable, {
        ref: vxeRef,
        data: rows.value,
        maxHeight: props.maxHeight,
        rowHeight: props.rowHeight,
        // columns: columns as ColumnsType,
        rowConfig: {
          useKey: true,
          keyField: props.rowKey,
          isHover: !props.rowHoverable === false,
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
        // 写死
        // 所有筛选都是远端
        filterConfig: {
          remote: true,
        },
        onFilterChange,
        showOverflow: props.overflow === true ? false : true,
        scrollY: { enabled: true, gt: 20 },
        onCheckboxChange: onSelectedChange,
        onCheckboxAll: onSelectedChange,
        tooltipConfig: {
        },
        border: border.value,
        round: props.round,
        // loading: loading,
        // pagination: false,
        // rowKey: props.rowKey,
        // rowSelection,
        spanMethod,
        style: {
          ...fills
        }
      }, () => columns),
      pagination = () => h(NsPagination, {
        class: [],
        totalPages: rows.value?.length,
        ...props.paginationData,
        onChange: props.onPageChange,
      })

    const vm = getCurrentInstance() as any

    // 依据列 label 获取 field
    function getFieldFromLabel (label: string) {
      const found = allColumns.find(co => co.label === label)
      if (found) {
        return found.props.field
      }
      return undefined
    }

    const hideColumns = (cs: string[]) => {
      const table = vxeRef.value!
      cs.forEach(label => {
        let field: string | undefined = label
        if (!table.getColumnByField(label)) {
          field = getFieldFromLabel(label)
        }
        table.hideColumn(field)
      })
    }

    const showColumns = (cs: string[]) => {
      const table = vxeRef.value!
      cs.forEach(label => {
        let field: string | undefined = label
        if (!table.getColumnByField(label)) {
          field = getFieldFromLabel(label)
        }
        table.showColumn(field)
      })
    }

    vm.render = () => h('div', {
        class: classes,
        style: props.style,
      }, [
        vxe(),
        props.hasPagination
          ? pagination()
          : null
      ])

    props.vendorRef!.value = {
      hideColumns,
      showColumns,
      clearChecked
    }
  }
})
