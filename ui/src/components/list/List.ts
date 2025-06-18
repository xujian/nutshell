import { h, defineComponent } from 'vue'
import type { PropType, SlotsType, VNode } from 'vue'
import { Color } from '../../composables'
import { buildDesignClasses, buildDesignStyles, TitleProps, useDesignProps, useGapProps, useGrouping, useGroupingProps, useTitle, useTitleProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'
import { NsColumn } from '../flex'
import { useSelectable, useSelectableProps, selectableEmits, SelectableEmits } from '../../props'

export type ListItemData = {
  number?: number,
  title?: string,
  name?: string,
  caption?: string,
  link?: string,
  icon?: string,
  arrow?: boolean,
  value?: number,
  [key: string]: any,
}

export const listItemProps = {
  number: {
    type: Number,
  },
  hasArrow: {
    type: Boolean,
  },
  /**
   * 行底色
   */
  fill: {
    type: String as PropType<Color>
  },
  data: {
    type: Object as PropType<ListItemData>
  }
}

export interface ListItemSlots extends SlotsType {
  /**
   * 列表一行的主体部分
   */
  default: never,
  /**
   * 主体后侧
   */
  append: (item: ListItemProps) => VNode,
  /**
   * 主体前侧
   */
  prepend: (item: ListItemProps) => VNode,
}

const listItemSlots: SlotsType<ListItemSlots> = {}

export type ListItemProps = MakePropsType<typeof listItemProps>

export const listProps = {
  ...useTitleProps(),
  footnote: {
    type: String,
  },
  data: {
    type: Array as PropType<ListItemData[]>
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
  itemFill: {
    type: String as PropType<Color>,
  },
  ...useGapProps(),
  ...useGroupingProps(),
  ...useVariantProps(),
  ...useDesignProps(),
  ...useSelectableProps(),
}

export interface ListEmits extends SelectableEmits {
}

const emits: ListEmits = {
  ...selectableEmits,
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

    const title = useTitle({...props.data } as TitleProps)

    const main = ({ data }: ListItemProps) => {
      return h('div', {
        class: [
          'list-item-section',
          'list-item-section-main',
        ],
      }, [
        title()
      ])
    }
    const value = (item: ListItemProps) => {
      return h('div', {
        class: ['list-item-section list-item-section-value number'],
      }, item.data?.value ?? '')
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
          ...buildDesignClasses({
            fill: props.fill,
          }),
        ],
        style: {
          ...buildDesignStyles({
            fill: props.fill,
          }),
        },
        ...props.data?.link
          ? { onClick: () => { Taro.navigateTo({url: props.data?.link}) } }
          : {},
      }, [
          // 输出 数字栏
          // 由 <ns-list> 属性控制
          props.number !== void 0
            ? no(props.data?.number || props.number)
            : null,
          slots.prepend
            ? slots.prepend(props)
            : null,
          main(props),
          props.data?.value !== void 0 ? value(props) : null,
          slots.append?.(props),
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
  setup (props, { slots, emit }) {

    const { isSelecting, selected, toggleSelected, isSelected }
      = useSelectable(props, emit)

    const { groups, hasGroups } = useGrouping<ListItemData>(props.data, props.groupBy)

    const header = () => props.title
      ? h('div', {
          class: ['list-title'],
        }, props.title)
      : null

    const row = (d: ListItemData, index: number) => h(NsListItem, {
      key: d.id || index,
      class: [
        'selectable-item',
        ...isSelected(d)
          ? ['selected']
          : []
      ],
      ...props,
      data: d,
      fill: props.itemFill,
      ...props.hasNumbers
        ? { number: index + 1 }
        : {},
      ...props.hasArrows
        ? {
            hasArrow: true
          }
        : {},
      onClick: () => {
        if (props.selectable) {
          toggleSelected(d)
        }
      }
    }, {
        prepend: () => slots.prepend
          ? h('div', {
              class: 'prepend'
            }, slots.prepend?.(d))
          : null,
        append: () => slots.append
          ? h('div', {
              class: 'append'
            }, slots.append?.(d))
          : null,
    })

    const body = () => props.data
      ? hasGroups.value
        ? groups?.value?.map(({ name, items }, index: number) => [
            // 平行输出 group-header 和 items
            h('div', {
              class: ['group-header'],
            }, name),
            ...items.map((d: ListItemData, index: number) => row(d, index))
          ])
        : props.data.map((d, index) => row(d, index))
      : h('div', {
        class: ['ns-empty']
      })

    return () => h(NsColumn, {
      class: [
        'ns-list',
        'ns-selectable',
        'column',
        ...isSelecting.value ? ['selecting'] : [],
        `select-type-${props.selectType}`,
        ...props.variant ? [`variant-${props.variant}`] : [],
        ...props.dense ? ['dense'] : [],
        ...buildDesignClasses(props),
      ],
      style: {
        ...buildDesignStyles(props),
      },
      align: 'stretch',
      gap: props.gap,
    }, {
        default: () => [
          header(),
          body(),
          ...slots.default
            ? [slots.default()]
            : [],
      ]
    })
  }
})
