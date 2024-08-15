import Intl from 'intl'
import 'intl/locale-data/jsonp/en.js'

var g =
  typeof window !== 'undefined' && window.Math === Math
    ? window
    : typeof global === 'object'
    ? global
    : this

if (g) {
  if (!g.Intl) {
    // @ts-ignore
    g.Intl = Intl
  }
}

export * from './components'
export * from './shared'
