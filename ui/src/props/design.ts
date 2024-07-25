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
  accent: {
    type: String as PropType<Color>,
  },
  /**
   * 渐变
   */
  gradient: {
    type: String as PropType<GradientString>
  },
  texture: {
    type: String,
  },
  repeat: {
    type: Boolean,
    default: true
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
  /**
   * 描边
   */
  stroke: {
    type: String as PropType<Color>
  },
  strokeSize: {
    type: Number
  },
  dotted: {
    type: Boolean
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

/**
 * 配色以及视觉风格属性
 */
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
    'with-design',
    ...(fill && isBrand(fill) ? [`fill-${fill}`] : []),
    ...(props.borders ? [`borders-${props.borders}`] : []),
    ...(props.round ? ['round'] : []),
    ...(props.gradient ? ['gradient'] : []),
    ...(props.texture ? ['texture'] : []),
    ...(props.gradient && props.texture ? ['texture-gradient'] : []),
    ...filterClasses
  ]
  return result
}

const buildDesignStyles: (props: DesignProps) => StyleObject = (props: DesignProps) => {
  const fill = props.fill || (Reflect.get(props, 'color') as Color)
  const style = {
    ...(fill ? { '--fill': makeColor(fill) } : {}),
    ...(props.surface ? { '--surface': makeColor(props.surface) } : {}),
    ...(props.accent ? { '--accent': makeColor(props.accent) } : {}),
    ...(props.stroke ? { borderColor: makeColor(props.stroke) } : {}),
    ...(props.dotted ? { borderStyle: 'dotted' } : {}),
    ...(props.strokeSize ? { borderWidth: `${props.strokeSize}px` } : {}),
    ...(props.foreground ? {
        '--text': makeColor(props.foreground),
        '--foreground': makeColor(props.foreground)
      } : {}),
    ...props.blur ? {'--blur': `${props.blur}px`} : {},
    ...props.brightness != 1 ? {'--brightness': props.brightness} : {},
    ...buildGradientStyle(props.gradient),
    ...buildTextureStyles(props),
  } as StyleObject
  return style
}

const buildTextureStyles: (props: DesignProps) => StyleObject = (props) => {
  const style = {
    ...props.texture
      ? {
          '--texture': `url(${props.texture})`,
          '--repeat': props.repeat ? 'repeat' : 'no-repeat',
        }
      : {}
  }
  return style
}

const buildDesignVariables = (props: DesignProps) => {
  return {}
}

const useDesignProps = buildProps(designProps)

export { buildDesignStyles, buildDesignVariables, buildDesignClasses, useDesignProps }
