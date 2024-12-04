import { stylesPlugin } from './styles'

export default function nutshell (_options) {

  const plugins = [
    stylesPlugin({
      styles: true
    })
  ]

  return plugins
}
