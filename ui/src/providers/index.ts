// const nutuiProvider: Promise<{default: CoreProvider}> = import(
//   /* name: 'provider.nutui' */
//   './nutui')
const antdvToImport: () => Promise<{default: CoreProvider}> = () => import(
  /* name: 'provider.antdv' */
  './antdv')

import nutui from './nutui'
// import antdv from './antdv'
import { VNode } from 'vue'

/**
 * Nutshell Core Provider
 * 
 */
export interface CoreProvider {
  render: (props) => VNode,
  prepare: (app) => void
}

/**
 * 似乎不能按需加载
 */
const providers = {
  nutui,
  antdv: antdvToImport
}

export interface ImportedProvider {
  default: CoreProvider
}

export const getProvider: (name: string) => CoreProvider | Promise<ImportedProvider> 
  = (name: string) => {
    let result = providers[name]
    if (typeof result === 'function') {
      return result()
    }
    return result
  }

// export default providers