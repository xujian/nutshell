export type ThemeOptions = false | {

}

export const BRANDS = [
  'primary',
  'secondary',
  'neutral',
  'accent',
  'positive',
  'negtive',
  'warning',
] as const

export const ESSENTIAL = [
  'background',
  'surface',
  'text',
  'stroke'
]

export type BrandColor = typeof BRANDS[number]

export type HexColor = `#${string}`
export type RgbColor = `rgb(${string})`
export type RgbaColor = `rgba(${string})`
export type Color = BrandColor | HexColor | RgbColor | RgbaColor

type BaseColors = {
  [k in BrandColor]: HexColor
} & {
  [k in typeof ESSENTIAL[number]]: HexColor
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
  
}
