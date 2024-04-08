import { PropType } from 'vue'
import { Color, GradientString, buildFillStyle, buildGradientStyle } from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  /**
   * 渐变
   */
  gradient: {
    type: String as PropType<GradientString>,
  },
  borderColor: {
    type: String as PropType<Color>
  },
  borderWidth: {
    type: Number,
  },
}

export type DesignProps = MakePropsType<typeof designProps>

const buildDesignClasses = (props: DesignProps) => [
  ...props.fill ? [
    `fill-${props.fill}`
   ] : [],
  ]

const buildDesignStyles = (props: DesignProps) => {
  const style = {
    ...props.fill
      ? {
          ...buildFillStyle(props.fill)
        }
      : {},
    ...buildGradientStyle(props.gradient),
    ...props.borderColor
      ? { '--borderColor': props.borderColor }
      : {},
    ...props.borderColor
      ? { '--borderWidth': props.borderWidth }
      : {}
  }
  return style
}

const useDesignProps = buildProps(designProps)

export {
  buildDesignStyles,
  buildDesignClasses,
  useDesignProps,
}
