import type { Plugin } from 'vue'
import GlobalComponents from './global-components'
import Http from './http'

const plugins: Plugin[] = [
  GlobalComponents,
  Http
]

export * from './http'
export default plugins
