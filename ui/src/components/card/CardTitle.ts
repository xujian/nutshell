import { ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'

export const cardTitleProps = {
  label: {
    type: String
  },
}

export type CardTitleEmits = {
}

const emits: CardTitleEmits = {
}

export type CardTitleSlots = {
  default: never,
  after: never,
  end: never,
}

export type CardTitleProps = MakePropsType<typeof cardTitleProps, CardTitleEmits>

/**
 * 卡片标题组件 <ns-card-title>
 */
export const NsCardTitle = defineComponent({
  name: 'NsCardTitle',
  props: cardTitleProps,
  setup (props, { slots }) {
    console.log('--------, cardTitle', slots)
    const classes = [
      'ns-card',
      'flex',
      'flex-col',
    ].join(' ')


    const after = slots.after
      ? () => h('div', {
          class: 'title-after spacer'
        }, slots.after?.())
      : () => null

    const title = props.label
      ? () => h('div', {
          class: 'title'
        }, [
          h('h3', {
              class: 'title-label'
            }, props.label),
          after()
        ]
      )
      : () => null

    const end = slots.end
      ? () => h('div', {
          class: 'title-end'
        }, [
          slots.end?.()
        ])
      : () => null

    return () => h('div', {
      class: 'card-title flex flex-row align-center',
    }, [
      title(),
      end()
    ])
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
