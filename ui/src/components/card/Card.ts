import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { Color } from '../../composables/theme'
import { useVariantProps } from '../../props'

export const cardProps = {
  title: {
    type: String
  },
  color: {
    type: String as PropType<Color>,
  },
  ...useVariantProps(),
}

export type CardProps = ExtractPublicPropTypes<typeof cardProps>

export interface CardEmits extends ObjectEmitsOptions {
}

const emits: CardEmits = {
}

export interface CardSlots extends SlotsType {
  default: never,
  corner: never,
  header: never,
  footer: never,
}

export const cardSlots = {
  default: () => {},
  corner: () => {},
  header: () => {},
  footer: () => {},
}

/**
 * 卡片组件 <ns-card>
 */
export const NsCard = defineComponent({
  name: 'NsCard',
  props: cardProps,
  emits,
  cardSlots,
  setup (props, { slots }) {
    const classes = [
      'ns-card',
      'flex',
      'flex-col',
      props.color ? `color-${props.color}` : '',
      props.variant ? `variant-${props.variant}` : '',
    ].join(' ')

    const title = props.title
      ? h('h3', {
          class: 'card-title'
        }, props.title)
      : ''

    const titleAfter = h('div', {
      class: 'title-after spacer'
    }, slots.header?.())

    const corner = h('div', {
      class: 'card-corner'
    }, [
      slots.corner?.()
    ])

    const header = h('div', {
      class: 'card-header flex flex-row align-center',
    }, [
      title,
      titleAfter,
      corner,
    ])

    const body = h('div', {
      class: 'card-body flex-grow'
    }, slots.default?.())

    return () => h('div', {
      class: classes
    }, [
      props.title
        ? header
        : '',
      body
    ])
  }
})
// 需要增加 import 到 ./index.ts, ../components.ts