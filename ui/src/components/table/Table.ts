import {
  PropType,
  VNode,
  RendererNode,
  RendererElement,
  useSlots,
  VNodeNormalizedChildren,
  ref
} from 'vue'
import { define, MakePropsType } from '../../utils'
import { TableColumnFixed, TableColumnProps } from './TableColumn'
import { PaginationProps } from '../pagination'
import { buildDesignVariables, useDesignProps, buildDesignClasses } from '../../props'
import { Color } from '../../composables/theme'

/**
 * 填充表格的数据
 */
export type TableRow = {
  [key: string]: string | number
}

/**
 * 表示表格单元格内数据模型
 * 通常用于表格内事件参数或计算用数据
 *
 * 例如 表格内按钮的单击事件
 */
export type TableCellModel = {
  /**
   * 单元格所在行所在列渲染值
   */
  value: unknown
  /**
   * 所在行
   */
  row: Record<string, unknown>
  /**
   * 行号
   */
  rowIndex: number
}

export type TableRows = TableRow[]

export type TableColumnSlot = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: string
  }
>

export type TableColumnDefinition = {
  name?: string
  label: string,
  props: TableColumnProps
  slots?: VNodeNormalizedChildren
  customRender?: (options: any) => void
}

export type TableTreeConfig = {
  /**
   * 是否启用树形表格
   */
  enable: boolean
  /**
   * true 设置父子节点不互相关联，默认false
   */
  checkStrictly?: boolean
}

/**
 * 表格筛选条件
 */
export type TableFilterQuery = {
  field: string,
  values: string[]
}

/**
 * 表格筛选方法
 */
export type TableFilterHandler = (queries: TableFilterQuery[]) => void

export const tableProps = {
  /**
   * 行数据
   */
  rows: {
    type: Array as PropType<TableRows>,
    default: []
  },
  /**
   * Columns Customization 列配置
   */
  columns: {
    type: Array as PropType<TableColumnDefinition[]>
  },
  rowKey: {
    type: String,
    default: () => 'id'
  },
  customColumns: {
    type: Array,
    require: false
  },
  /**
   * 列可见性控制器
   */
  hasColumnControl: {
    type: Boolean,
    default: () => false,
  },
  /**
   * 初始状态显示的列
   */
  visibleColumns: {
    type: Array as PropType<string[]>,
    require: false,
  },
  /**
   * 初始状态隐藏的列
   */
  hiddenColumns: {
    type: Array as PropType<string[]>,
    require: false,
  },
  maxHeight: {
    type: [String, Number]
  },
  /**
   * 表行对鼠标 hover 动作变色
   */
  rowHoverable: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * 设置所有内容过长时显示为省略号
   * @remarks 如果是固定列建议设置该值，大幅提升渲染速度，可防止固定列里面的组件重复渲染等问题
   */
  overflow: {
    // 暂时只实现 true/false
    // false: 显示省略号, true: 允许换行撑开高度, 无值: 按 false 处理
    // 提升渲染性能需显式设置 overflow=false
    // 这里要注意一下 VXE 的属性名 showOverflow 的含义是反的
    type: Boolean
  },
  /**
   * 树形表格配置
   */
  treeConfig: {
    type: Object as PropType<TableTreeConfig>,
  },
  /**
   * 行高
   */
  rowHeight: {
    type: Number
  },
  headerHeight: {
    type: Number,
  },
  /**
   * 执行筛选的方法
   */
  filterHandler: {
    type: Function as PropType<TableFilterHandler>,
  },
  /**
   * 自带分页
   */
  hasPagination: {
    type: Boolean,
    default: true,
  },
  /**
   * 分页数据
   */
  paginationData: {
    type: Object as PropType<PaginationProps>,
  },
  /**
   * 可见列数据缓存到 local storage
   * 必须给出 storage key
   */
  cacheColumns: {
    type: String,
    default: '',
  },
  ...useDesignProps(),
  headerColor: {
    type: String as PropType<Color>,
  }
}


export type TableEmits = {
  pageChange: (value: number) => void
}

export const tableEmits: TableEmits = {
  pageChange: (value: number) => void 0,
}

export type TableProps = MakePropsType<typeof tableProps, TableEmits>

export const NsTable = define({
  name: 'NsTable',
  props: tableProps,
  emits: tableEmits,
  setup(props, ctx) {

    const vendorRef = ref()

    function getColumnName(slot: TableColumnSlot): string {
      const slotType = slot.type as any,
        functionName = slotType.name
      return functionName.slice('NsTableColumn'.length).toLowerCase()
    }

    /**
     * 给所有的 <ns-table-column-xxx> 补上默认值
     * 同时支持 hidden 形式的属性
     * 使 hidden 等效于 :hidden="true"
     * @returns
     */
    function getSlotProps (slot: TableColumnSlot): TableColumnProps {
      const ps: Record<string, any> = slot.props as Record<string, any>,
      // @ts-ignore
        definedProps = slot.type.props || {}
      Object.keys(definedProps).forEach((key: string) => {
        if (definedProps[key].hasOwnProperty('default')) {
          if (ps[key] === void 0) {
            ps[key] = definedProps[key].default
          }
          if (ps[key] === '') { // 属性为
            if (definedProps[key].type.name === 'Boolean') {
              ps[key] = true
            }
          }
        }
      })
      return ps
    }

    function getCustomizedColumns(): TableColumnDefinition[] {
      const { default: defaultSlot } = useSlots()
      if (!defaultSlot) return []
      const slots = defaultSlot()
      // 获取全体 <ns-table-column-x>
      // 读取所有 slots 并且读属性, 转换为 TableColumnDefinition
      return slots.map((slot) => ({
        name: getColumnName(slot),
        label: slot.props?.label,
        props: getSlotProps(slot),
        slots: slot.children
      }))
    }

    /**
     * 读取全体子组件
     * 例如 <ns-table-column-chip />
     * 并作为属性传递给 vendor 最终处理
     */
    const columns = getCustomizedColumns()

    const hideColumns = (columns: string[]) => {
      vendorRef.value.hideColumns(columns)
    }

    const showColumns = (columns: string[]) => {
      vendorRef.value.showColumns(columns)
    }

    const style = {
      ...buildDesignVariables(props),
      ...props.headerColor ? { '--header-color': props.headerColor } : {},
      ...props.rowHeight ? { '--row-height': `${props.rowHeight}px` } : {},
      ...props.headerHeight ? { '--header-height': `${props.headerHeight}px` } : {},
    }

    const classes = {
      ...buildDesignClasses(props)
    }

    return {
      // 只返回修改后的属性
      // 将会和原有 props 合并
      // 并作为最终 props 交给 vendor
      props: {
        // 对 customColumns 的处理在 vendors/components/table
        columns,
        style,
        classes: classes,
      },
      methods: {
        hideColumns,
        showColumns,
      },
      vendorRef,
    }
  }
})
