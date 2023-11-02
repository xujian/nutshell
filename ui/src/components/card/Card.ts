import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { Color, buildFillStyle } from '../../composables/theme'
import { useVariantProps } from '../../props'

export const cardProps = {
  title: {
    type: String
  },
  /**
   * 填色
   */
  fill: {
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

/**
 * 卡片组件 <ns-card>
 */
export const NsCard = defineComponent({
  name: 'NsCard',
  props: cardProps,
  setup (props, { slots }) {
    const classes = [
      'ns-card',
      'flex',
      'flex-col',
      props.fill ? `fill-${props.fill}` : '',
      props.variant ? `variant-${props.variant}` : '',
    ].join(' ')

    const style = buildFillStyle(props.fill)

    const label = props.title
      ? h('div', {
          class: 'title'
        },
        h('h3', {
            class: 'title-label'
          }, props.title)
        )
      : ''

    const titleAfter = h('div', {
      class: 'title-after spacer'
    }, () => slots.header?.())

    const corner = h('div', {
      class: 'title-corner'
    }, [
      slots.corner?.()
    ])

    const header = h('div', {
      class: 'card-header flex flex-row align-center',
    }, [
      label,
      titleAfter,
      corner,
    ])

    const body = () => h('div', {
      class: 'card-body flex-grow'
    }, slots.default?.())

    return () => h('div', {
      class: classes,
      style,
    }, [
      props.title
        ? header
        : '',
      body()
    ])
  }
})
