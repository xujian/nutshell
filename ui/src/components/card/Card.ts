import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, computed } from 'vue'
import { buildFillStyle, buildGradientStyle, Color } from '../../composables/theme'
import { buildDesignClasses, buildDesignStyles, buildDesignVariables, useDesignProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'

export const cardProps = {
  title: {
    type: String
  },
  padding: {
    type: Number,
  },
  bodyFill: {
    type: String as PropType<Color>,
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
  titleAfter?: () => any,
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

    const classes = computed(() => [
      'ns-card',
      'flex',
      'flex-column',
      'align-stretch',
      ...buildDesignClasses(props),
    ])

    const style = computed(() => ({
      ...buildDesignStyles(props),
      ...props.padding !== void 0
        ? { '--padding': props.padding }
        : {}
    }))

    const label = () => props.title
      ? h('div', {
          class: 'title'
        },
        h('h3', {
            class: 'title-label'
          }, props.title)
        )
      : null

    const titleAfter = () => slots.titleAfter
      ? h('div', {
          class: 'title-after'
        }, slots.titleAfter())
      : null

    const corner = () => slots.corner
      ? h('div', {
          class: 'title-corner'
        }, [
          slots.corner()
        ])
      : null

    const header = () => props.title || slots.header
      ? h('div', {
          class: 'card-header flex flex-row align-center',
        }, slots.header
          ? slots.header?.()
          : [
              label(),
              titleAfter(),
              h('div', {class: 'spacer'}),
              corner(),
            ]
        )
      : null

    const body = () => h('div', {
      class: 'card-body column align-stretch',
      style: {
        ...props.bodyFill ? { '--body-fill': props.bodyFill } : {}
      }
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
      class: classes.value,
      style: style.value,
    }, [
      header(),
      body(),
      footer(),
      bottom()
    ])
  }
})
