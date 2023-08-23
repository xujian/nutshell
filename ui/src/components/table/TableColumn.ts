import { ExtractPublicPropTypes, PropType } from 'vue'
import type { TableColumnsType } from 'ant-design-vue'
import { define } from '../../utils'

const props = {
  /**
   * 列名
   */
  match: {
    type: String,
  },
}

export type TableColumnProps = ExtractPublicPropTypes<typeof props>

export const NsTableColumn = define({
  name: 'NsTableColumn',
  props,
  setup (props, ctx) {
    return {
      props
    }
  }
})
