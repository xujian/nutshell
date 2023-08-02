// const nutuiProvider: Promise<{default: CoreProvider}> = import(
//   /* name: 'provider.nutui' */
//   './nutui')
// const antdvProvider: Promise<{default: CoreProvider}> = import(
//   /* name: 'provider.antdv' */
//   './antdv')

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
// const providers = {
//   nutui,
//   antdv: antdvProvider
// }

export interface ImportedProvider {
  default: CoreProvider
}

export const getProvider: (name: string) => CoreProvider | Promise<ImportedProvider> 
  = (name: string) => {
    if (name === 'nutui') {
      return nutui
    } else if (name === 'antdv') {
      return import(
        /* name: 'provider.antdv' */
        './antdv') as Promise<{default: CoreProvider}>
    } else {
      return nutui
    }
    // return providers[name || 'nutui']!
  }

// export default providers