import { PropType } from 'vue'
import { Color, GradientString, buildFillStyle, buildGradientStyle, makeColor } from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

export type Borders = 'all' | 'vertical' | 'horizonal' | 'none'

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  foreground: {
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
  borderStyle: {
    type: Number,
  },
  /**
  * 边框线模式
  */
 borders: {
   type: String as PropType<Borders>,
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
  }
  return style
}

const buildDesignVariables = (props: DesignProps) => {
  return {
    ...props.fill
      ? {'--fill': makeColor(props.fill) }
      : {},
    ...props.borderColor
      ? { '--border-color': props.borderColor }
      : {},
    ...props.borderWidth
      ? { '--border-width': props.borderWidth }
      : {},
    ...props.foreground
      ? { '--foreground': props.foreground }
      : {},
  }
}

const useDesignProps = buildProps(designProps)

export {
  buildDesignStyles,
  buildDesignVariables,
  buildDesignClasses,
  useDesignProps,
}
