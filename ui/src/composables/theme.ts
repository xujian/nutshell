export type ThemeOptions = false | {

}

export type HexColor = `#${string}`

interface BaseColors {
  background: HexColor
  surface: HexColor
  text: HexColor
  primary: HexColor
  secondary: HexColor
  accent: HexColor
  positive: HexColor
  negtive: HexColor
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
