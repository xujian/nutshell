import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { buildFillStyle, buildGradientStyle } from '../../composables/theme'
import { useDesignProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'

export const cardProps = {
  title: {
    type: String
  },
  ...useDesignProps(),
  ...useVariantProps(),
}

export interface CardEmits extends ObjectEmitsOptions {
}

const emits: CardEmits = {
}

export interface CardSlots extends SlotsType {
  default?: never,
  corner?: never,
  header?: never,
  footer?: never,
  bottom?: never,
}

const cardSlots: CardSlots = {
  default: undefined,
  corner: undefined,
  header: undefined,
  footer: undefined,
  bottom: undefined
}

export type CardProps = MakePropsType<typeof cardProps, CardEmits>

/**
 * 卡片组件 <ns-card>
 */
export const NsCard = defineComponent({
  name: 'NsCard',
  props: cardProps,
  slots: cardSlots,
  setup (props, { slots }) {
    console.log('NsCard------', slots);
    
    const classes = [
      'ns-card',
      'flex',
      'flex-col',
      'align-stretch',
      props.fill ? `fill-${props.fill}` : '',
      props.variant ? `variant-${props.variant}` : '',
    ].join(' ')

    const style = {
      ...buildFillStyle(props.fill),
      ...buildGradientStyle(props.gradient)
    }
    console.log('card.ts/...........', style);
    

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
      class: 'card-body'
    }, slots.default?.())

    const footer = () => h('div', {
      class: [
        'card-footer',
      ]
    }, slots.footer?.())

    const bottom = () => h('div', {
      class: [
        'card-bottom',
      ]
    }, slots.bottom?.())

    return () => h('div', {
      class: classes,
      style,
    }, [
      props.title
        ? header
        : '',
      body(),
      slots.footer
        ? footer()
        : null,
        slots.bottom
          ? bottom()
          : null,
    ])
  }
})
