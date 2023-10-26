import { ExtractPublicPropTypes, ObjectEmitsOptions, PropType } from 'vue'
import { define } from '../../../utils'
import { EmitsToProps } from '../../../utils/private/helpers'
import { TableColumnStyleDefination, useTableColumnProps } from '../../'


export type CryptoSecret = {
  secretKey: string
  mask: string,
}

type DecryptMethod = (data: CryptoSecret) => Promise<string>

const props = {
  ...useTableColumnProps(),
  onDecrypt: {
    type: Function as PropType<DecryptMethod>,
  }
}

export interface TableColumnCryptoEmits extends ObjectEmitsOptions {
  decrypted: () => void
}

const emits: TableColumnCryptoEmits = {
  decrypted: () => void 0
}

export type TableColumnCryptoProps = ExtractPublicPropTypes<typeof props> & EmitsToProps<TableColumnCryptoEmits>

/**
 * 自定义的表格列样式
 */
export const NsTableColumnCrypto = define({
  name: 'NsTableColumnCrypto',
  props,
  emits,
  setup (props, ctx) {
    return {
    }
  }
})
