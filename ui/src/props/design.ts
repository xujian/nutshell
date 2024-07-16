import { PropType } from 'vue'
import {
  Color,
  GradientString,
  buildFillStyle,
  buildGradientStyle,
  isBrand,
  makeColor
} from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType, StyleObject } from '../utils'

export const BORDERS_VALUES = ['all', 'vertical', 'horizonal', 'inner', 'outer', 'none'] as const

export type Borders = (typeof BORDERS_VALUES)[number]

const designProps = {
  /**
   * 填色
   */
  fill: {
    type: String as PropType<Color>
  },
  /**
   * 底色
   */
  surface: {
    type: String as PropType<Color>
  },
  foreground: {
    type: String as PropType<Color>
  },
  /**
   * 渐变
   */
  gradient: {
    type: String as PropType<GradientString>
  },
  /**
   * 圆角 使用系统 --ns-border-radius
   */
  round: {
    type: Boolean
  },
  borderRadius: {
    type: Number
  },
  borderColor: {
    type: String as PropType<Color>
  },
  borderWidth: {
    type: Number
  },
  borderStyle: {
    type: Number
  },
  /**
   * 边框线模式
   */
  borders: {
    type: String as PropType<Borders>
  },
  /**
   * 毛玻璃效果
   */
  blur: {
    type: Number
  },
  brightness: {
    type: Number
  }
}

export type DesignProps = MakePropsType<typeof designProps>

const hasDesignProps = (props: DesignProps) => {
  return Object.keys(designProps)
}

const buildDesignClasses = (props: DesignProps) => {
  const fill = props.fill || (Reflect.get(props, 'color') as Color),
    filterClasses = (
        props.blur
        || props.brightness
      ) ? ['backdrop-filter']
        : []
  const result = [
    ...(fill && isBrand(fill) ? [`fill-${fill}`] : []),
    ...(props.borders ? [`borders-${props.borders}`] : []),
    ...(props.round ? ['round'] : []),
    ...(props.gradient ? ['gradient'] : []),
    ...filterClasses
  ]
  return result
}

const buildDesignStyles: (props: DesignProps) => StyleObject = (props: DesignProps) => {
  const fill = props.fill || (Reflect.get(props, 'color') as Color)
  const style = {
    ...(fill ? { backgroundColor: makeColor(fill) } : {}),
    ...(props.surface ? { '--surface': makeColor(props.surface) } : {}),
    ...(props.borderColor ? { broderColor: props.borderColor } : {}),
    ...(props.borderWidth ? { borderWidth: props.borderWidth } : {}),
    ...(props.foreground ? { color: props.foreground } : {}),
    ...props.blur ? {'--blur': `${props.blur}px`} : {},
    ...props.brightness != 1 ? {'--brightness': props.brightness} : {},
    ...buildGradientStyle(props.gradient),
  } as StyleObject
  return style
}

const buildDesignVariables = (props: DesignProps) => {
  return {}
}

const useDesignProps = buildProps(designProps)

export { buildDesignStyles, buildDesignVariables, buildDesignClasses, useDesignProps }
