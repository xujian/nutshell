import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h } from 'vue'
import { buildFillStyle, buildGradientStyle } from '../../composables/theme'
import { buildDesignStyles, buildDesignVariables, useDesignProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'

export const cardProps = {
  title: {
    type: String
  },
  ...useDesignProps(),
  ...useVariantProps(),
}

export type CardEmits = {
}

const emits: CardEmits = {
}

export type CardSlots = {
  default: () => any,
  corner?: () => any,
  header?: () => any,
  title?: () => any,
  footer?: () => any,
  bottom?: () => any,
}

const cardSlots: SlotsType<CardSlots> = {
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
    const classes = [
      'ns-card',
      'flex',
      'flex-column',
      'align-stretch',
      'with-design',
      props.fill ? `fill-${props.fill}` : '',
      props.variant ? `variant-${props.variant}` : '',
    ].join(' ')

    const style = {
      ...buildDesignStyles(props),
      ...buildDesignVariables(props),
    }
    console.log('===style', style)

    const label = () => props.title
      ? h('div', {
          class: 'title'
        },
        h('h3', {
            class: 'title-label'
          }, props.title)
        )
      : null

    const titleAfter = () => h('div', {
      class: 'title-after spacer'
    }, () => slots.header?.())

    const corner = () => h('div', {
      class: 'title-corner'
    }, [
      slots.corner?.()
    ])

    const header = () => props.title || slots.header
      ? h('div', {
          class: 'card-header flex flex-row align-center',
        }, slots.header
          ? slots.header?.()
          : [
              label(),
              titleAfter(),
              corner(),
            ]
        )
      : null

    const body = () => h('div', {
      class: 'card-body'
    }, slots.default?.())

    const footer = () => slots.footer
      ? h('div', {
          class: [
            'card-footer',
          ]
        }, slots.footer())
      : null

    const bottom = () => slots.bottom
      ? h('div', {
          class: [
            'card-bottom',
          ]
        }, slots.bottom())
      : null

    return () => h('div', {
      class: classes,
      style,
    }, [
      header(),
      body(),
      footer(),
      bottom()
    ])
  }
})
