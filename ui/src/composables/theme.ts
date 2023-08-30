export type ThemeOptions = false | {

}

export const BRANDS = [
  'primary',
  'secondary',
  'accent',
  'warning',
  'positive',
  'negtive',
] as const

export const ESSENTIALS = [
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
