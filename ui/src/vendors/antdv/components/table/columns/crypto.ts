import { h, ref, Fragment, defineComponent } from 'vue'
import { CryptoSecret, CustomColumnFunctionalRender, TableColumnCryptoProps, TableColumnData } from '../../../../../components'
import { SetupContext } from 'vue'

/**
 * Table custom column: button
 * @param column
 * @param custom
 */
export default function crypto (
    props: TableColumnCryptoProps,
  ) {
  // 脱敏字段
  // 手机号脱敏
  // 这是带有状态的 table column, 所以用 defineComponent 定义
  // 不能用 functional component
  const setup = ({value, row, rowIndex}: TableColumnData, ctx: SetupContext) => {
    if (!value) return () => h('div', {}, [])
    let data: Record<string, string> = {}
    try {
      data = JSON.parse(value)
    } catch (e) {
      return () => h('div', {}, [])
    }
    if (!data.mask) return () => h('div', {}, [])

    const content = ref(data.mask),
      state = ref(props.enabled ? 'masked' : 'decrypted')

    const onIconClick = () => {
      if (!props.onDecrypt) return
      if (!row) return
      if (state.value === 'masked') {
        props.onDecrypt.call(null, data as CryptoSecret).then((answer: string) => {
          if (answer) {
            content.value = answer
            state.value = 'decrypted'
          }
        })
      } else {
        state.value = 'masked'
        content.value = data.mask
      }
    }

    const icon = () => h('i', {
      class: ['icon', `icon-${state.value}`],
      onClick: onIconClick
    })

    return () => h(Fragment, {}, [
        h('label', {class: 'number'}, content.value.replace(/\*/g, '∗')),
        icon()
      ]
    )
  }

  return defineComponent(
    setup,
    {
      name: 'TableColumnCryptoInterior',
      inheritAttrs: false,
      props: ['value', 'row', 'rowIndex'],
  })
}
