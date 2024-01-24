import { DefineComponent, ObjectEmitsOptions, PropType, SetupContext } from 'vue'
import { define, MakePropsType } from '../../utils'
import { TableColumnDefinition, TableColumnStyleDefination } from '../../components/table'

export type NsTableColumnType = 'normal' | 'number' | 'checkbox'
export type NsTableColumnAlign = 'left' | 'center' | 'right'
export type NsTableColumnFixed = undefined | 'left' | 'right'

export const useTableColumnProps = () => ({
  /**
   * 列名
   */
  field: {
    type: String
  },
  /**
   * 列头名称
   */
  label: {
    type: String
  },
  width: {
    type: [Number, String]
  },
  align: {
    type: String as PropType<NsTableColumnAlign>,
    default: 'center'
  },
  fixed: {
    type: String as PropType<NsTableColumnFixed>,
    default: undefined
  },
  /**
   * 列可排序
   */
  sortable: {
    type: Boolean,
    default: false
  },
  /**
   * 列可筛选
   */
  filterable: {
    type: Array as PropType<TableColumnFilterOptions>
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
    require: false
  },
  /**
   * 隐藏这一列
   * @remarks 用于某些特殊逻辑
   */
  hidden: {
    type: Boolean,
    default: false
  },
  /**
   * 显示树形节点
   */
  tree: {
    type: Boolean,
    default: false
  }
})

const props = {
  ...useTableColumnProps(),
  type: {
    type: String as PropType<NsTableColumnType>,
    require: false,
    default: 'normal'
  }
}

export type TableColumnEmits = {
  click: ({ value, row, rowIndex }: TableColumnData) => void
  change: (value: string[]) => void
}

const emits: TableColumnEmits = {
  click: ({ value, row, rowIndex }: TableColumnData) => void 0,
  change: (value: string[]) => void 0
}

/**
 * 表格列标准属性
 */
export type TableColumnProps = MakePropsType<typeof props, TableColumnEmits>

/**
 * 表格列数据
 * 填充 table cell 时需要用到的数据
 */
export type TableColumnData = {
  value: string
  row: Record<string, any>
  rowIndex?: number
  column?: TableColumnDefinition,
  columnIndex?: number
}

/**
 * 表格列参数
 */
export type TableColumnInfo = {
  column?: TableColumnProps,
  columnIndex?: number
}

/**
 * 列筛选选项
 */
export type TableColumnFilterOptions = {
  label: string
  value: string | number
}[]

export type CustomColumnFunctionalRender = (args: TableColumnData) => any

/**
 * 列头渲染函数
 */
export type CustomColumnHeaderFunctionalRender = (args: TableColumnInfo) => any


export type CustomColumnSlots = {
  content: CustomColumnFunctionalRender,
  header?: CustomColumnHeaderFunctionalRender
}

export type CustomColumnRender = (
  props: TableColumnProps,
  ctx?: SetupContext
) => CustomColumnFunctionalRender | CustomColumnSlots | DefineComponent<TableColumnData>


/**
 * Type Guard // 断定来值是 自定义列 slot 多项定义
 * @param def
 */
export function isCustomColumnSlots(def: CustomColumnFunctionalRender | CustomColumnSlots): def is CustomColumnSlots {
  // 用于判断返回的是 slots 定义
  return 'content' in def
}

/**
 * 表格列
 */
export const NsTableColumn = define({
  name: 'NsTableColumn',
  props,
  emits,
  setup(props, ctx) {
    return {}
  }
})
