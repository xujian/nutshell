import { PropType, SlotsType, defineComponent, h, computed, VNode } from 'vue'
import { Color } from '../../composables/theme'
import { buildBoxClasses, buildBoxStyles, buildDesignClasses, buildDesignStyles, Size, useBoxProps, useDesignProps, useTitle, useTitleProps, useVariantProps } from '../../props'
import { MakePropsType } from '../../utils'
import { Dimension } from '../../types'
import { NsIcon } from '../icon'

export const cardProps = {
  ...useTitleProps(),
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
  default: () => VNode[],
  icon?: () => VNode[],
  corner?: () => VNode[],
  header?: () => VNode[],
  title?: () => VNode[],
  titleAfter?: () => VNode[],
  footer?: () => VNode[],
  bottom?: () => VNode[],
}

export type CardProps = MakePropsType<typeof cardProps, CardEmits>

/**
 * 卡片组件 <ns-card>
 */
export const NsCard = defineComponent({
  name: 'NsCard',
  props: cardProps,
  slots: Object as SlotsType<CardSlots>,
  setup (props, { slots }) {

    const classes = computed(() => [
      'ns-card',
      'flex',
      'flex-column',
      'align-stretch',
      ...buildDesignClasses(props),
      ...props.bodyFill ? ['has-body-fill'] : [],
      ...slots.header ? ['has-header'] : [],
      ...props.edge ? ['has-edge'] : [],
    ])

    const style = computed(() => ({
      ...buildDesignStyles(props),
    }))

    const icon = () => slots.icon
      ? h('div', {
          class: [
            'card-icon'
          ]
        }, slots.icon())
      : null

    const title = useTitle(props)

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
              icon(),
              title(),
              titleAfter(),
              h('div', {class: ['spacer']}),
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
