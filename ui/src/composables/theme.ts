export type ThemeOptions = false | {

}

export type Theme = {
  name: string
  primary: string
}

export function createTheme (name: string) {
  return {
    name: 'default',
    primary: 'cobalt'
  }
}
