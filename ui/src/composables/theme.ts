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
export type Color = BrandColor | EssentialColor | HexColor | RgbColor | RgbaColor

type BaseColors = {
  [k in BrandColor]: HexColor
} & {
  [k in typeof ESSENTIALS[number]]: HexColor
}

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

/**
 * 生成 background color 样式
 */
export function buildFillStyle (fill?: Color): { backgroundColor?: string} {
  if (!fill) return {}
  return {
    backgroundColor: 
      BRANDS.includes(fill as typeof BRANDS[number]) || ESSENTIALS.includes(fill as typeof ESSENTIALS[number])
        ? `var(--${fill})`
        : fill
  }
}