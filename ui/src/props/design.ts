import { PropType } from 'vue'
import chroma from 'chroma-js'
import {
  Color,
  GradientString,
  buildGradientStyle,
  isBrand,
  isEssential,
  isGradient,
  makeColor
} from '../composables/theme'
import { buildProps } from '../utils/private/props'
import { MakePropsType, StyleObject } from '../utils'
import { Dimension } from '../types'
import { Size } from './size'
// 从 SCSS 获取颜色变量值
import theme from '../styles/theme.module.scss'


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

export type ColorObject = {
  type: 'named' | 'valued',
  value: string
}

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
    type: String
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
   * 两头是圆形
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
  dashed: {
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
    type: [Boolean, Number, String] as PropType<boolean | number | Size>,
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

const getFill = (props: DesignProps): ColorObject | undefined => {
  const fill: Color | undefined = props.fill || Reflect.get(props, 'color')
  return fill
    ? isBrand(fill) || isEssential(fill)
      ? {
          type: 'named',
          value: fill as string
        }
      : {
          type: 'valued',
          value: fill as string
        }
    : void 0

}

const getFillValue = (fill: ColorObject) => {
  return fill
    ? fill.type === 'named'
      ? Reflect.get(theme, fill.value as string) as Color
      : fill.value
    : void 0
}

const getColorScheme = (props: DesignProps) => {
  const fill = getFill(props),
    fillValue = fill ? getFillValue(fill) : void 0,
    variant = Reflect.get(props, 'variant')
  const scheme: ColorScheme | undefined =
    fill
      // 在 variant=plain 时不计算 colorScheme
      ? variant !== 'plain'
        ? fillValue
          ? chroma(fillValue).get('lab.l') > 70
            ? 'light'
            : 'dark'
          : void 0
        : void 0
      : void 0
    // 依据填色值确定 color scheme
    const colorScheme: ColorScheme | undefined = props.colorScheme
    || scheme
  return colorScheme
}

const buildDesignClasses: (props: DesignProps) => string[]
  = (props: DesignProps) => {
  const
    fill = getFill(props),
    // 依据 colorValue 自动计算 colorScheme
    // 从 fill color 的亮度自动计算是 dark 还是 light
    colorScheme = getColorScheme(props),
    filterClasses = (
        props.blur
        || props.brightness
      ) ? ['backdrop-filter']
        : []
  const result = [
    'with-design',
    ...fill
      ? fill.type === 'named'
        ? [`fill-${fill.value}`]
        : ['has-fill']
      : [],
    ...(colorScheme ? [`color-scheme-${colorScheme}`] : []),
    ...(props.borders ? [`borders-${props.borders}`] : []),
    ...(props.round ? ['round'] : []),
    ...(props.square ? ['square'] : []),
    ...(props.gradient
        ? isArtifact(props.gradient)
          ? ['artifact-gradient', `gradient-${props.gradient}`]
          : ['with-gradient']
        : []),
    ...(props.motion
        ? [`motion-${props.motion}`]
        : []),
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
    ...(props.shadow || props.depth ? ['has-shadow'] : []),
    ...props.stroke ? ['has-stroke'] : [],
    ...(props.stroke && isGradient(props.stroke) ? ['with-stroke-gradient'] : []),
    ...(props.fluted ? ['fluted'] : []),
    ...(props.r && typeof props.r === 'string'
        ? [`r-${props.r}`]
        : []),
    ...filterClasses
  ]
  return result
}

const buildDesignStyles: (props: DesignProps) => StyleObject = (props: DesignProps) => {
  const fill = getFill(props),
    fillValue = fill ? getFillValue(fill) : void 0,// 仅取具体色值
    colorScheme = getColorScheme(props)
  const style = {
    ...colorScheme ? {
        colorScheme
      }: {},
    ...fill
        ? fill.type === 'valued'
          ? { '--fill': fill.value }
          : {}
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
    ...(props.dashed === true ? { borderStyle: 'dashed' } : {}),
    ...(props.r !== void 0 && typeof props.r === 'number'
        ? {
          '--r': `${props.r}px`
          }
        : {}
      ),
    ...(props.thick !== void 0 ? { '--thick': `${props.thick}px` } : {}),
    ...props.blur ? {'--blur': `${props.blur}px`} : {},
    ...props.brightness && props.brightness != 1 ? {'--brightness': props.brightness} : {},
    ...props.shadow
        ? {'--shadow': typeof props.shadow === 'number'
            ? `${props.shadow}px`
            : `var(--ns-spacing-${typeof props.shadow === 'boolean' ? 'md' : props.shadow})`
        }
        : {},
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
