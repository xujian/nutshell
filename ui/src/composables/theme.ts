export type ThemeOptions = false | {

}

const DEFAULT_THEME = 'present'

export const BRANDS = [
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

export type BrandColor = typeof BRANDS[number]
export type EssentialColor = typeof BRANDS[number]

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
export type GradientString = `${Color},${Color}` | `${Color},${Color}/${number}`

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

export function makeColor (color: Color): string {
  return BRANDS.includes(color as typeof BRANDS[number]) ||
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
  { backgroundColor?: string, background?: string } {
    if (!gradient) return {}
    const [start, end, angle = 0] = gradient.split(/[\,\/]/) as [Color, Color, number]
    const startColor = makeColor(start),
      endColor = makeColor(end)
    return {
      background: `linear-gradient(${angle}deg, ${startColor} 0%, ${endColor} 100%)`
    }
}
