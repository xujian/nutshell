import chroma from 'chroma-js'

export type ThemeOptions = false | {
}

const DEFAULT_THEME = 'present'

export const brands = [
  'primary',
  'secondary',
  'neutral',
  'accent',
  'positive',
  'negtive',
  'warning',
] as const

export const ESSENTIALS = [
  'background',
  'surface',
  'text',
  'stroke'
] as const

export type BrandColor = typeof brands[number]
export type EssentialColor = typeof brands[number]

export type HexColor = `#${string}`
export type RgbColor = `rgb(${string})`
export type RgbaColor = `rgba(${string})`
export type Color = BrandColor | EssentialColor | HexColor | RgbColor | RgbaColor | 'transparent'

type BaseColors = {
  [k in BrandColor]: HexColor
} & {
  [k in typeof ESSENTIALS[number]]: HexColor
}

/**
 * 渐变
 */
export type GradientString = `${Color},${Color}` | `${Color},${Color}/${number}` | `${number}${number}${number}`

export type Theme = {
  name: string
  dark: boolean,
  colors: BaseColors
}

export function createTheme (name: string) {
  return {
    name: 'default',
    primary: 'cobalt'
  }
}

export function useTheme () {
  const theme = localStorage.getItem('theme') || DEFAULT_THEME,
    setTheme = (name: string) => {
      localStorage.setItem('theme', name)
    }
  return { theme, setTheme }
}

export function isBrand (color?: Color) {
  if (!color) return false
  const result = brands.includes(color as BrandColor)
  return result
}

export function isGradient (color?: Color) {
  if (!color) return false
  return color.includes(',')
}

export function makeColor (color: Color): string {
  return brands.includes(color as typeof brands[number]) ||
    ESSENTIALS.includes(color as typeof ESSENTIALS[number])
      ? `var(--ns-${color})`
      : color as string
}

/**
 * 生成 background color 样式
 */
export function buildFillStyle (fill?: Color): { backgroundColor?: string} {
  if (!fill) return {}
  return {
    backgroundColor: makeColor(fill)
  }
}

/**
 * 生成 gradient 样式
 */
export function buildGradientStyle (gradient?: GradientString):
  { '--gradient'?: string, '--foreground'?: string } {
    // 平均拉开渐变
    if (!gradient) return {}
    if (/^\d{3}$/.test(gradient)) return {}
    const [colorString, angle = 0] = gradient.split('/') as [string, number],
      [start, ...colors] = colorString.split(','),
      seg = 100 / colors.length,
      startColor = makeColor(start as Color),
      // 计算平均色值, 决定 text (foreground) color
      valuedColors = [start, ...colors]
        .filter(c => /^(#|rgb)/.test(c)),
      averageColor = chroma.average(valuedColors),
      colorScheme = averageColor.get('lab.l') > 70
        ? 'light'
        : 'dark'
    const notes = colors.map((c, index) => ({
        value: makeColor(c as Color),
        percent: (
          index === colors.length - 1
            ? 100
            : (seg * (index + 1)).toPrecision(5)
          )
      })).map(c => `${c.value} ${c.percent}%`).join(',')
    return {
      '--gradient': `linear-gradient(${angle}deg,${startColor} 0%,${notes})`,
      '--foreground': `var(--ns-text-${colorScheme})`
    }
}
