import { defineComponent, h, ref, Fragment } from 'vue'
import { TableColumnCryptoProps } from '../../../../../components'

/**
 * Table custom column: button
 * @param column 
 * @param custom 
 */
export default function crypto (
    attrs: TableColumnCryptoProps,
  ) {
  // 脱敏字段
  // 手机号脱敏
  // 这是带有状态的 table column, 所以用 defineComponent 定义
  // 不能用 functional component
  return defineComponent({
    props: {
      text: {
        type: String,
      },
      record: {
        type: Object,
      },
      index: {
        type: Number
      }
    },
    setup: (props, ctx) => {
      if (!props.text) return () => ''
      let data: Record<string, string> = {}
      try {
        data = JSON.parse(props.text)
      } catch (e) {
        return () => ''
      }
      if (!data.mask) return () => ''

      const content = ref(data.mask),
        state = ref('masked')
      
      const icon = h('i', {
        class: [`icon-${state.value}`],
        onClick () {
          if (!attrs.onDecrypt) return
          if (state.value === 'masked') {
            attrs.onDecrypt.call(null, props.record).then((answer: string) => {
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
      })

      return () => h(Fragment, {}, [
          h('label', {class: 'number'}, content.value.replace(/\*/g, '∗')),
          icon
        ]
      )
    }
  })
}