import { h, defineComponent } from 'vue'
import type { PropType, SlotsType, VNode } from 'vue'
import { Color } from '../../composables'
import { buildDesignClasses, buildDesignStyles, useDesignProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'

export type ListItemData = {
  number?: number,
  title?: string,
  name?: string,
  caption?: string,
  link?: string,
  icon?: string,
  arrow?: boolean,
  [key: string]: any,
}

export const listItemProps = {
  number: {
    type: Number,
  },
  hasArrow: {
    type: Boolean,
  },
  color: {
    type: String as PropType<Color>
  },
  data: Object as PropType<ListItemData>
}

export interface ListItemSlots extends SlotsType {
  default: never,
  /**
   * 主体后侧
   */
  append: () => VNode,
  /**
   * 主体前侧
   */
  prepend: () => VNode,
}

const listItemSlots: SlotsType<ListItemSlots> = {}

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
  hasArrows: {
    type: Boolean,
  },
  dense: {
    type: Boolean,
  },
  ...useVariantProps(),
  ...useDesignProps(),
}

export type ListEmits = {
}

const emits: ListEmits = {
}

export interface ListSlots extends SlotsType {
  default: never,
  /**
   * 主体后侧
   */
  append: (item: Record<string, any>) => VNode,
  /**
   * 主体前侧
   */
  prepend: (item: Record<string, any>) => VNode,
}

const listSlots: SlotsType<ListSlots> = {}

export type ListProps = MakePropsType<typeof listProps, ListEmits>

export const NsListItem = defineComponent({
  name: 'NsListItem',
  props: listItemProps,
  slots: listItemSlots,
  setup (props, { slots, emit }) {

    console.log('===hasArrow', props.hasArrow)

    const main = ({ data }: ListItemProps) => {
      return h('div', {
        class: [
          'list-item-section',
          'list-item-section-main',
        ],
      }, [
        data?.title
          ? h('h5', {
              class: 'title'
            }, data.title)
          : null,
        data?.name
          ? h('p', { class: ['list-item-caption', 'caption']}, data.name)
          : null,
        data?.caption
          ? h('p', { class: ['list-item-caption', 'caption']}, data.caption)
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
          ...props.data?.link ? ['has-link'] : [],
        ],
        ...props.data?.link
          ? { onClick: () => { Taro.navigateTo({url: props.data?.link}) } }
          : {}
      }, [
        // 输出 数字栏
        // 由 <ns-list> 属性控制
        props.number !== void 0
          ? no(props.data?.number || props.number)
          : null,
        slots.append?.(),
        main(props),
        slots.prepend?.(),
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
  sltos: listSlots,
  emits,
  setup (props, { slots }) {

    const header = props.title
      ? h('div', {
          class: ['list-title'],
        }, () => props.title)
      : null

    const body = props.data
      ? props.data.map((d: Record<string, any>, index: number) => {
          return h(NsListItem, {
            key: d.id || index,
            ...props,
            ...props.hasNumbers
              ? { number: index + 1 }
              : {},
            ...props.hasArrows
              ? {
                  hasArrow: true
                }
              : {},
            data: d
          }, {
            ...slots.prepend
              ? {
                prepend: () => h('div', {
                    class: 'prepend'
                  }, slots.prepend?.(d))
                }
              : {},
            ...slots.append
              ? {
                prepend: () => h('div', {
                    class: 'append'
                  }, slots.append?.(d))
                }
              : {}
          })
        })
      : h('div', {
        class: ['ns-empty']
      })

    return () => h('div', {
      class: [
        'ns-list',
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...props.dense ? ['dense'] : [],
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
