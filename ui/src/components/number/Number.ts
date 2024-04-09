import { PropType, ObjectEmitsOptions, SlotsType, defineComponent, h, onMounted, ref } from 'vue'
import { MakePropsType } from '../../utils'
import { useModelValuePropsForInput,
  buildDimensionProps,useDimensionProps, buildFlexStyles,
  useFlexProps, Align, Justify, useDesignProps,
  buildDesignStyles,
  useTooltipProps,
  makeTooltip,
  convertDimension,
} from '../../props'
import { Dimension } from '../../types'

const arrowDown = '▼',
  arrowUp = '▲'

export type Trend  = 'up' | 'down'

export const numberProps = {
  ...useModelValuePropsForInput(),
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  header: {
    type: String,
  },
  footer: {
    type: String,
  },
  fontSize: {
    type: [Number, String] as PropType<Dimension>
  },
  maximumFractionDigits: {
    type: Number,
    defineComponent: undefined
  },
  minimumFractionDigits: {
    type: Number,
    defineComponent: 0
  },
  ...useDimensionProps(),
  /**
   * 主干行高度
   */
  mainHeight: {
    type: [Number, String],
  },
  /**
   * 主干行副轴(垂直)对齐
   */
  mainAlign: {
    type: String as PropType<Align>,
  },
  /**
   * 主干行主轴(水平)对齐
   */
  mainJustify: {
    type: String as PropType<Justify>,
  },
  ...useFlexProps(),
  ...useDesignProps(),
  padding: {
    type: Number,
  },
  /**
   * 写死的涨跌
   */
  trend: {
    type: String as PropType<Trend>,
  },
  /**
   * 正负值直接推断涨跌
   */
  autoTrend: {
    type: Boolean,
    default: false,
  },
  ...useTooltipProps(),
}

export type NumberEmits = {
}

const numberEmits: NumberEmits = {
}

export type NumberSlots = {
  default: never,
  header: never,
  footer: never,
}

export type NumberProps = MakePropsType<typeof numberProps, NumberEmits>

/**
 * 数字组件 <ns-number>
 */
export const NsNumber = defineComponent({
  name: 'NsNumber',
  props: numberProps,
  emits: numberEmits,
  setup (props, { slots }) {

    const root = ref<HTMLDivElement>()

    // 数字组件不同于 <ns-number-input>/<ns-table-column-number>
    // 用于数字的显示
    // 除核心的数值外
    // 数字组件还含有 header/footer/heading/prefix/suffix/箭头 等附属内容
    // [              header          ]
    // [ main                         ]
    // [ prefix ][  digits  ][ suffix ]
    // [                         main ]
    // [              footer          ]

    const finalValue = parseFloat(`${props.modelValue}` || '0', 10),
      finalDisplay = finalValue.toLocaleString('en-US', {
        maximumFractionDigits: props.maximumFractionDigits,
        minimumFractionDigits: props.minimumFractionDigits,
      })

    const digits = () => h('div', {
        class: [
          'digits',
          'number'
        ]
      }, finalDisplay),
      prefix = () => h('div', {
        class: [
          'prefix'
        ]
      }, props.prefix || ''),
      suffix = () => h('div', {
        class: [
          'suffix'
        ]
      }, props.suffix || ''),
      trend = props.trend ||
        (
          props.autoTrend
          ? finalValue > 0
            ? 'up'
            : finalValue === 0
              ? void 0
              : 'down'
          : void 0
        ),
      arrow = () => h('div', {
          class: [
            'arrow',
            trend,
          ]
        }, trend === 'up'
            ? arrowUp
            : arrowDown
        ),
      main = () => h('div', {
        class: [
          'main',
        ]
      }, [
        props.prefix ? prefix() : null,
        digits(),
        props.suffix ? suffix() : null,
        trend ? arrow() : null
      ]),
      header = () => h('div', {
        class: [
          'header'
        ]
      }, props.header || ''),
      footer = () => h('div', {
        class: [
          'header'
        ]
      }, props.footer || ''),
      content = () => h('div', {
        class: [
          'content',
          'flex-with-vars',
        ]
      }, [
        slots.header
          ? slots.header()
          : props.header
            ? header()
            : null,
        main(),
        slots.footer
          ? slots.footer()
          : props.footer ? footer() : null
      ])

    const styles = {
      ...buildDimensionProps(props),
      ...buildFlexStyles(props),
      ...buildDesignStyles(props),
      ...props.mainHeight
        ? { '--mainHeight': convertDimension(props.minHeight) }
        : {},
      ...props.fontSize
        ? { '--fontSize': convertDimension(props.fontSize) }
        : {},
      ...props.mainAlign
        ? { '--mainAlign': props.mainAlign }
        : {},
      ...props.mainJustify
        ? { '--mainJustify': props.mainJustify }
        : {},
      ...props.padding
        ? { padding: `${props.padding}px` }
        : {}
    }

    onMounted(() => {
      if (props.tooltip) {
        makeTooltip(root.value!, props)
      }
    })

    return () => h('div', {
      class: [
        'ns-number',
        'column',
      ],
      style: styles,
      ref: root,
    }, [
      content(),
    ])
  }
})
