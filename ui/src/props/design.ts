import { PropType } from 'vue'
import { Color, GradientString, buildBlurStyle, buildFillStyle, buildGradientStyle, isBrand, makeColor } from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType } from '../utils'

export const BORDERS_VALUES =  ['all', 'vertical', 'horizonal', 'inner', 'outer', 'none'] as const

export type Borders = typeof BORDERS_VALUES[number]

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>,
  },
  /**
   * 底色
   */
  surface: {
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
  /**
   * 圆角 使用系统 --ns-border-radius
   */
  round: {
    type: Boolean,
  },
  borderRadius: {
    type: Number
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
 /**
  * 毛玻璃效果
  */
 blur: {
  type: Number,
 },
 brightness: {
  type: Number,
 }
}

export type DesignProps = MakePropsType<typeof designProps>

const buildDesignClasses = (props: DesignProps) => [
  'with-design',
  ...props.fill && isBrand(props.fill) ? [
    `fill-${props.fill}`
   ] : [],
   ...props.borders ? [
     `borders-${props.borders}`
    ] : [],
    ...props.round ? [
      'round'
     ] : [],
  ]

const buildDesignStyles = (props: DesignProps) => {
  const style = {
    ...props.fill
      ? {'--fill': makeColor(props.fill) }
      : {},
      ...props.surface
        ? {'--surface': makeColor(props.surface) }
        : {},
    ...props.borderColor
      ? { '--stroke': props.borderColor }
      : {},
    ...props.borderWidth
      ? { '--border-width': props.borderWidth }
      : {},
    ...props.foreground
      ? { '--foreground': props.foreground }
      : {},
    ...props.blur
      ? { '--blur': `${props.blur}px` }
      : {},
    ...props.brightness
      ? { '--brightness': props.brightness }
      : {},
    ...buildGradientStyle(props.gradient),
    ...buildBlurStyle(props),
  }
  return style
}

const buildDesignVariables = (props: DesignProps) => {
  return {
  }
}

const useDesignProps = buildProps(designProps)

export {
  buildDesignStyles,
  buildDesignVariables,
  buildDesignClasses,
  useDesignProps,
}
