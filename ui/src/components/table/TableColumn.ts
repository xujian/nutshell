import { DefineComponent, ObjectEmitsOptions, PropType, SetupContext } from 'vue'
import { define, MakePropsType } from '../../utils'
import { TableColumnStyleDefination } from '../../components/table'

export type NsTableColumnType = 'normal' | 'number' | 'checkbox'
export type NsTableColumnAlign = 'left' | 'center' | 'right'
export type NsTableColumnFixed = undefined | 'left' | 'right'

export const useTableColumnProps = () => ({
  /**
   * 列名
   */
  field: {
    type: String,
  },
  /**
   * 列头名称
   */
  label: {
    type: String,
  },
  width: {
    type: Number,
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
    default: false,
  },
  /**
   * 列可筛选
   */
  filterable: {
    type: Array as PropType<TableColumnFilterOptions>,
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
    require: false,
  }
})


const props = {
  ...useTableColumnProps(),
  type: {
    type: String as PropType<NsTableColumnType>,
    require: false,
    default: 'normal',
  },
}

export interface TableColumnEmits extends ObjectEmitsOptions {
  click: ({value, row, index}: TableColumnData) => void
}

const emits: TableColumnEmits = {
  click: ({value, row, index}: TableColumnData) => void 0
}

/**
 * 表格列标准属性
 */
export type TableColumnProps = MakePropsType<typeof props, TableColumnEmits>

/**
 * 表格列数据
 */
export type TableColumnData = {
  value: string,
  row: Record<string, any>,
  index?: number
}

/**
 * 列筛选选项
 */
export type TableColumnFilterOptions = {
  label: string,
  value: string | number
}[]

export type CustomColumnFunctionalRender = 
  ({ value, row, index }: TableColumnData) => any

export type CustomColumnRender =
  (props: TableColumnProps, ctx?: SetupContext) => CustomColumnFunctionalRender | DefineComponent<TableColumnData>

/**
 * 表格列
 */
export const NsTableColumn = define({
  name: 'NsTableColumn',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
