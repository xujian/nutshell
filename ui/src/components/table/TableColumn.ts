import { DefineComponent, ExtractPublicPropTypes, ObjectEmitsOptions, PropType, RendererElement, RendererNode, SetupContext, VNode } from 'vue'
import { define } from '../../utils'
import { EmitsToProps } from '../../utils/private/helpers'
import { TableColumnStyleDefination } from '../../components/table'

export type NsTableColumnType = 'normal' | 'number' | 'checkbox'
export type NsTableColumnAlign = 'left' | 'center' | 'right'
export type NsTableColumnFixed = 'left' | 'right'

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
    default: 'left'
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
  click: () => void
}

const emits: TableColumnEmits = {
  click: () => void 0
}

export type TableColumnProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnEmits>

export type TableColumnComponentProps = {
  text: string,
  record: Record<string, any>,
  index?: number
}

export type CustomColumnFunctionalRender = ({ text, record, index }: TableColumnComponentProps) => VNode<RendererNode, RendererElement>

export type CustomColumnRender =
  (props: TableColumnProps, ctx?: SetupContext) => CustomColumnFunctionalRender | DefineComponent<TableColumnComponentProps>

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
