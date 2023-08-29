export type ThemeOptions = false | {

}

const brands = [
  'primary',
  'secondary',
  'accent',
  'warning',
  'positive',
  'negtive',
] as const

const essentials = [
  'background',
  'surface',
  'text',
  'stroke'
]

export type BrandColor = typeof brands[number]

export type HexColor = `#${string}`
export type RgbColor = `rgb(${string})`
export type RgbaColor = `rgba(${string})`
export type Color = BrandColor | HexColor | RgbColor | RgbaColor

type BaseColors = {
  [k in BrandColor]: HexColor
} & {
  [k in typeof essentials[number]]: HexColor
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
