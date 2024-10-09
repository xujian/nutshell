import { PropType } from 'vue'
import {
  Color,
  GradientString,
  buildFillStyle,
  buildGradientStyle,
  isBrand,
  isGradient,
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
  /**
   * 颗粒
   */
  grain: {
    type: String as PropType<GradientString>
  },
  /**
   * 动画填充
   */
  motion: {
    type: String,
  },
  /**
   * 底图
   */
  texture: {
    type: String,
  },
  /**
   * 图案
   */
  pattern: {
    type: String
  },
  repeat: {
    type: Boolean,
    default: true
  },
  /**
   * 使用圆角
   */
  round: {
    type: Boolean
  },
  /**
   * 不使用圆角
   */
  square: {
    type: Boolean
  },
  radius: {
    type: Number
  },
  /**
   * 描边
   */
  stroke: {
    type: String as PropType<Color>
  },
  edge: {
    type: String,
  },
  /**
   * 线宽
   */
  thick: {
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
  /**
   * 格纹玻璃效果
   */
  fluted: {
    type: Number,
  },
  brightness: {
    type: Number
  },
  /**
   * 投影色
   */
  shadow: {
    type: String as PropType<Color>,
  },
  /**
   * 投影深度
   */
  depth: {
    type: Number
  },
  /**
   * 用来识别属性里包含 Design Props
   */
  __design: {
    type: Boolean,
    default: true,
  }
}

/**
 * 配色以及视觉风格属性
 */
export type DesignProps = MakePropsType<typeof designProps>

const isArtifact = (value: string) => /^\d{3}$/.test(value);

export function hasDesignProps (props: any): props is DesignProps {
  return props.__design === true
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
    ...(props.square ? ['square'] : []),
    ...(props.gradient
        ? isArtifact(props.gradient)
          ? ['artifact-gradient', `gradient-${props.gradient}`]
          : ['with-gradient']
        : []),
    ...props.motion
        ? [`motion-${props.motion}`]
        : [],
    // ...(props.gradient && /\d{3}/.test(props.gradient) ? [`gradient-${props.gradient}`] : []),
    ...(props.texture ? ['with-texture'] : []),
    ...(props.pattern
        ? isArtifact(props.pattern)
          ? [`pattern-${props.pattern}`]
          : ['with-pattern']
        : []),
    ...(props.gradient && props.texture ? ['with-texture-gradient'] : []),
    ...(props.gradient && props.pattern ? ['with-pattern-gradient'] : []),
    ...(props.shadow || props.depth ? ['with-shadow'] : []),
    ...(props.stroke && isGradient(props.stroke) ? ['with-stroke-gradient'] : []),
    ...props.fluted ? ['fluted'] : [],
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
    ...(props.stroke !== void 0 ? { '--stroke': makeColor(props.stroke) } : {}),
    ...(props.dotted === true ? { borderStyle: 'dotted' } : {}),
    ...(props.radius !== void 0 ? { '--radius': `${props.radius}px` } : {}),
    ...(props.thick !== void 0 ? { '--thick': `${props.thick}px` } : {}),
    ...(props.foreground ? {
        '--text': makeColor(props.foreground),
        '--foreground': makeColor(props.foreground)
      } : {}),
    ...props.blur ? {'--blur': `${props.blur}px`} : {},
    ...props.brightness && props.brightness != 1 ? {'--brightness': props.brightness} : {},
    ...props.shadow ? {'--shadow': makeColor(props.shadow)} : {},
    ...props.depth ? {'--depth': `${props.depth}px`} : {},
    ...props.fluted ? { '--fluted': `${props.fluted}px` } : {},
    ...buildGradientStyle(props.gradient),
    ...buildTextureStyles(props),
  } as StyleObject
  return style
}

const buildTextureStyles: (props: DesignProps) => StyleObject = (props) => {
  const style = {
    // /texture/ 指的是 填充形式的背景图
    ...props.texture
      ? {
          '--texture': `url(${props.texture})`,
        }
      : {},
    // /pattern/ 指的是 连续平铺的图案
    ...props.pattern && !isArtifact(props.pattern)
      ? {
          '--pattern': `url(${props.pattern})`,
        }
      : {},
  }
  return style
}

const buildDesignVariables = (props: DesignProps) => {
  return {}
}

const useDesignProps = buildProps(designProps)

export { buildDesignStyles, buildDesignVariables, buildDesignClasses, useDesignProps }
