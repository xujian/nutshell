import { ObjectEmitsOptions, PropType } from 'vue'
import { define, MakePropsType } from '../../../utils'
import { useTableColumnProps } from '../TableColumn'


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

export type TableColumnCryptoEmits = {
  decrypted: () => void
}

const emits: TableColumnCryptoEmits = {
  decrypted: () => void 0
}

export type TableColumnCryptoProps = MakePropsType<typeof props, TableColumnCryptoEmits>

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
