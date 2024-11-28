import { PropType, SlotsType, defineComponent, h, computed } from 'vue'
import { Color } from '../../composables/theme'
import { buildBoxClasses, buildBoxStyles, buildDesignClasses, buildDesignStyles, Size, useBoxProps, useDesignProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'
import { Dimension } from '../../types'

export const cardProps = {
  title: {
    type: String
  },
  bodyFill: {
    type: String as PropType<Color>,
  },
  ...useDesignProps(),
  ...useVariantProps(),
  ...useBoxProps(),
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
      ...props.bodyFill ? ['has-body-fill'] : [],
      ...slots.header ? ['has-header'] : [],
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
        h('h5', {
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
          h('div', {class: 'spacer'}),
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
              corner(),
            ]
        )
      : null

    const body = () => h('div', {
      class: [
        'card-body',
        ...buildBoxClasses(props)
      ],
      style: {
        ...props.bodyFill ? { '--body-fill': props.bodyFill } : {},
        ...buildBoxStyles(props)
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
