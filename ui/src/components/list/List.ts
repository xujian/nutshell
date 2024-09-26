import { buildDesignClasses, buildDesignStyles, buildFlexClasses, buildFlexStyles, useDesignProps, useFlexProps } from '../../props'
import { MakePropsType } from '../../utils'
import { h } from 'vue'
import { PropType, SlotsType, defineComponent } from 'vue'

export const listItemProps = {
  number: {
    type: Number
  },
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  caption: {
    type: String,
  },
  link: {
    type: String,
  },
  icon: {
    type: String
  },
  hasArrow: {
    type: Boolean,
  }
}

export type ListItemProps = MakePropsType<typeof listItemProps>

export const listProps = {
  title: {
    type: String,
  },
  footnote: {
    type: String,
  },
  data: {
    type: Array as PropType<ListItemProps[]>
  },
  hasNumbers: {
    type: Boolean
  },
  ...useDesignProps(),
}

export type ListEmits = {
}

const emits: ListEmits = {
}

export interface ListSlots extends SlotsType {
  default: never,
}

export type ListProps = MakePropsType<typeof listProps, ListEmits>

export const NsListItem = defineComponent({
  name: 'NsListItem',
  props: listItemProps,
  setup (props) {

    const main = (props: ListItemProps) => {
      return h('div', {
        class: [
          'list-item-section',
          'list-item-section-main',
        ],
      }, [
        h('h4', {
          class: 'title'
        }, props.title),
        props.name
          ? h('p', { class: ['list-item-caption', 'caption']}, props.name)
          : null,
        props.caption
          ? h('p', { class: ['list-item-caption', 'caption']}, props.caption)
          : null,
      ])
    }
    const no = (n: number) => {
      return h('div', {
        class: ['list-item-section list-item-section-no number'],
      }, n)
    }
    const arrow = () => {
      return h('div', {
        class: ['list-item-section-arrow'],
      })
    }
    return () => h('div', {
        class: [
          'list-item',
          ...props.link ? ['has-link'] : [],
        ],
        ...props.link
          ? { onClick: () => { Taro.navigateTo({url: props.link}) } }
          : {}
      }, [
        props.number !== void 0
          ? no(props.number)
          : null,
        main(props),
        props.hasArrow ? arrow() : null,
      ]
    )
  }
})

/**
 * 列表组件 <ns-list>
 */
export const NsList = defineComponent({
  name: 'NsList',
  props: listProps,
  emits,
  setup (props, { slots }) {

    const header = props.title
      ? h('div', {
          class: ['list-title'],
        }, () => props.title)
      : null

    const body = props.data
      ? props.data.map((d: ListItemProps, index: number) => {
          return h(NsListItem, {
            ...d,
            ...props.hasNumbers
              ? { number: index + 1 }
              : {},
          })
        })
      : h('div', {
        class: ['ns-empty']
      })

    return () => h('div', {
      class: [
        'ns-list', 'r-md',
        ...buildDesignClasses(props),
      ],
      style: {
        ...buildDesignStyles(props),
      }
    }, [
      header,
      body,
      slots.default?.()
    ])
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts
