import { MakePropsType } from '../../utils'
import { h } from 'vue'
import { PropType, SlotsType, defineComponent } from 'vue'

export type ListRow = {
  title: string,
  /**
   * 列表项副标题
   */
  caption: string,
  icon: string,
  [x: string]: string,
}

export const listProps = {
  title: {
    type: String,
  },
  footnote: {
    type: String,
  },
  data: {
    type: Array as PropType<ListRow[]>
  },
  hasNumbers: {
    type: Boolean
  }
}

export type ListEmits = {
}

const emits: ListEmits = {
}

export interface ListSlots extends SlotsType {
  default: never,
}

export type ListProps = MakePropsType<typeof listProps, ListEmits>

/**
 * 列表 <ns-list>
 */
export const NsList = defineComponent({
  name: 'NsList',
  props: listProps,
  emits,
  setup (props, ctx) {

    const header = props.title
      ? h('div', {
          class: ['list-title'],
        }, () => props.title)
      : null

    const main = (row: ListRow) => {
      return h('div', {
        class: ['list-item-section list-item-section-main']
      }, [
        h('h4', {}, row.title),
        h('p', { class: ['list-item-caption', 'caption']}, row.caption)
      ])
    }

    const no = (row: ListRow, index: number) => {
      return h('div', {
        class: ['list-item-section list-item-section-no number'],
      }, index + 1)
    }

    const body = props.data
      ? props.data.map((d: ListRow, index: number) => {
          return h('div', {
              class: ['list-item']
            }, [
              props.hasNumbers ? no(d, index) : null,
              main(d)
            ]
          )
        })
      : h('div', {
        class: ['ns-empty']
      })

    console.log('dfdfdfdfdf', props.hasNumbers)
    return () => h('div', {
      class: ['ns-list', 'r-md', 'flex', 'flex-col'],
    }, [
      header,
      body,
    ])
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
