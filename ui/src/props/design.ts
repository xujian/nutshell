import { PropType } from 'vue'
import chroma from 'chroma-js'
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
import { Dimension } from '../types'
import { Size } from './size'

export const BORDERS_VALUES = ['all', 'vertical', 'horizonal', 'inner', 'outer', 'none'] as const

export type Borders = (typeof BORDERS_VALUES)[number]

export type ColorScheme =
  /**
   * 浅色
   */
  'light' |
  /**
   * 深色
   */
  'dark'

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
  /**
   * 字色
   */
  foreground: {
    type: String as PropType<Color>
  },
  /**
   * 选中色
   */
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
   * Mesh Gradient
   */
  mesh: {
    type: String,
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
  /**
   * R角
   */
  r: {
    type: [String, Number] as PropType<Size | Dimension>
  },
  /**
   * 描边
   */
  stroke: {
    type: String as PropType<Color>
  },
  /**
   * 外边框宽度
   */
  outline: {
    type: [String, Number] as PropType<Size | Dimension>
  },
  /**
   * 外边缘
   */
  edge: {
    type: Number,
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
   * 暗色调
   */
  colorScheme: {
    type: String as PropType<ColorScheme>,
  },
  clip: {
    type: String,
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
    // 依据填色值确定 color scheme
    colorScheme = props.colorScheme
      || (fill
        ? isBrand(fill)
          ? 'dark'
          : chroma(fill).get('lab.l') > 70
            ? 'light'
            : 'dark'
        : ''),
    filterClasses = (
        props.blur
        || props.brightness
      ) ? ['backdrop-filter']
        : []
  const result = [
    'with-design',
    ...fill && isBrand(fill)
      ? [`fill-${fill}`]
      : [],
    ...colorScheme ? [`color-scheme-${colorScheme}`] : [],
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
          ? ['with-pattern', `pattern-${props.pattern}`]
          : ['with-pattern']
        : []),
      ...(props.mesh
          ? ['with-mesh', `mesh-${props.mesh}`]
          : []),
    ...(props.gradient && props.texture ? ['with-texture-gradient'] : []),
    ...(props.gradient && props.pattern ? ['with-pattern-gradient'] : []),
    ...(props.shadow || props.depth ? ['with-shadow'] : []),
    ...props.stroke ? ['has-stroke'] : [],
    ...(props.stroke && isGradient(props.stroke) ? ['with-stroke-gradient'] : []),
    ...props.fluted ? ['fluted'] : [],
    ...props.r && typeof props.r === 'string'
        ? [`r-${props.r}`]
        : [],
    ...filterClasses
  ]
  return result
}

const buildDesignStyles: (props: DesignProps) => StyleObject = (props: DesignProps) => {
  const fill = props.fill || (Reflect.get(props, 'color') as Color)
  const style = {
    ...props.colorScheme ? {
      colorScheme: props.colorScheme
    }: {},
    ...(fill ? { '--fill': makeColor(fill) } : {}),
    .../^(#|rgb)/.test(fill)
      ? {
          colorScheme: chroma(fill).get('lab.l') > 70
            ? 'light'
            : 'dark'
        }
      : {},
    ...(props.surface ? { '--surface': makeColor(props.surface) } : {}),
    ...(props.accent ? { '--accent': makeColor(props.accent) } : {}),
    ...(props.stroke !== void 0 ? {
        '--stroke': makeColor(props.stroke),
        '--thick': `${props.thick || 1}px`
      } : {}),
    ...props.edge ? {
        '--edge': `${props.edge}px`
      }: {},
    ...(props.dotted === true ? { borderStyle: 'dotted' } : {}),
    ...(props.r !== void 0 && typeof props.r === 'number'
        ? {
          '--r': `${props.r}px`
          }
        : {}
      ),
    ...(props.thick !== void 0 ? { '--thick': `${props.thick}px` } : {}),
    ...(props.edge !== void 0 ? { '--edge': `${props.edge}px` } : {}),
    ...props.blur ? {'--blur': `${props.blur}px`} : {},
    ...props.brightness && props.brightness != 1 ? {'--brightness': props.brightness} : {},
    ...props.shadow ? {'--shadow': makeColor(props.shadow)} : {},
    ...props.depth ? {'--depth': `${props.depth}px`} : {},
    ...props.fluted ? { '--fluted': `${props.fluted}px` } : {},
    ...buildGradientStyle(props.gradient),
    ...buildTextureStyles(props),
    ...(props.foreground ? {
      '--text': makeColor(props.foreground),
      '--foreground': makeColor(props.foreground)
    } : {}),
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
