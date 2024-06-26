import { DefineComponent, ObjectEmitsOptions, PropType, SetupContext, VNode, Ref } from 'vue'
import { define, MakePropsType } from '../../utils'
import { TableColumnDefinition, TableColumnStyleDefination } from '../../components/table'
import { buildProps } from '../../utils/private/props'
import { UniDataItem } from '../../shared'
import { Color } from '../../composables'
import type { Borders } from '../../props'

export type TableColumnAlign = 'left' | 'center' | 'right'
export type TableColumnFixed = undefined | 'left' | 'right'

/**
 * 自定义列头筛选框
 * 例如按时间区间筛选
 * 或者显示一个输入框
 */
export type TableColumnFilterSettings = {
  data: UniDataItem[],
  component: VNode | (() => VNode),
  props: any,
  model: Ref,
}

export type TableColumnEditableMode = 'input' | 'number-input' | 'date-input' | 'select' | 'multiple-select'

// 格内编辑
// 1. 缺省情形 文本输入框
// 2. 使用 mode 指定 下拉选择单选/多选/时间日期输入/数字输入

export type TableColumnEditableChange = {
  row: Record<string, any>,
  field: string,
  value: string | number
}

/**
 * 格内编辑配置
 */
export type TableColumnEditable = {
  component: TableColumnEditableMode | VNode | (() => VNode),
  props?: any,
  // 负责提供给下拉菜单的选项
  options?: UniDataItem[] | Ref<UniDataItem[]>,
  onChange?: (params: TableColumnEditableChange) => void
}

/**
 * 单元格条件样式规则
 */
export type TableColumnConditionalStyleRule = {
  match: (value: string | number) => boolean,
  style: string
}

export const useTableColumnProps = buildProps({
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
    type: String as PropType<TableColumnAlign>,
    default: 'left'
  },
  headerAlign: {
    type: String as PropType<TableColumnAlign>,
    default: 'left'
  },
  /**
   * 列独立填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  fixed: {
    type: String as PropType<TableColumnFixed>,
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
    type: Object as PropType<TableColumnFilterSettings>
  },
  /**
   * 列说明
   */
  description: {
    type: String,
  },
  extraStyle: {
    type: [String, Function] as PropType<TableColumnStyleDefination>,
    require: false
  },
  /**
   * 列初始隐藏
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
  },
  /**
   * 单元格可编辑
   */
  editable: {
    type: [Boolean, String, Object] as PropType<boolean | TableColumnEditableMode | TableColumnEditable>,
    default: false,
  },
  // editData: {
  //   type: Array as PropType<UniDataItem[]>,
  //   default: []
  // },
  borders: {
    type: String as PropType<Borders>,
  },
  /**
   * 底色依据值做色阶映射
   */
  colorScales: {
    type: Array as PropType<Color[]>
  },
  /**
   * 条件样式
   */
  conditionalStyles: {
    type: Array as PropType<TableColumnConditionalStyleRule[]>,
  },
  /**
   * 是否可拖动
   */
  resizable: {
    type: Boolean,
    default: false
  },
})

const tableColumnProps = useTableColumnProps()

export type TableColumnEmits = {
  click: ({ value, row, rowIndex }: TableColumnData) => void
  /**
   * 用于可编辑列
   * @param params
   * @returns
   */
  change: (params: TableColumnEditableChange) => void
}

const emits: TableColumnEmits = {
  click: ({ value, row, rowIndex }: TableColumnData) => void 0,
  change: (params: TableColumnEditableChange) => void 0
}

/**
 * 表格列标准属性
 */
export type TableColumnProps = MakePropsType<typeof tableColumnProps, TableColumnEmits>

/**
 * 表格列数据
 * 填充 table cell 时需要用到的数据
 */
export type TableColumnData<T = string> = {
  value: T
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
 * 表格列 <ns-table-column>
 */
export const NsTableColumn = define({
  name: 'NsTableColumn',
  props: tableColumnProps,
  emits,
  setup (props, ctx) {

    return {
      props: {
      }
    }
  }
})
