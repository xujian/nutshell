import { PropType } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { TableColumnData, useTableColumnProps } from '../TableColumn'

export type CurrencyUnit = '元' | '万' | '亿' | '万亿'

export const tableColumnCurrencyProps = {
  ...useTableColumnProps(),
  unit: {
    type: String as PropType<CurrencyUnit>,
    default: '元'
  },
  maximumFractionDigits: {
    type: Number,
    default: undefined
  },
  minimumFractionDigits: {
    type: Number,
    default: 2,
  },
  maximumSignificantDigits: {
    type: Number,
    default: 0,
  }
}

export type TableColumnCurrencyEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void
}

const emits: TableColumnCurrencyEmits = {
  click: ({value, row, rowIndex}: TableColumnData) => void 0
}

export type TableColumnCurrencyProps = MakePropsType<typeof tableColumnCurrencyProps, TableColumnCurrencyEmits>

/**
 * 显示日期时间的表格列
 */
export const NsTableColumnCurrency = define({
  name: 'NsTableColumnCurrency',
  props: tableColumnCurrencyProps,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
