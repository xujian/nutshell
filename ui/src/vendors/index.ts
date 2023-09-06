// const nutuiProvider: Promise<{default: CoreProvider}> = import(
//   /* name: 'provider.nutui' */
//   './nutui')
const antdvToImport: () => Promise<{default: CoreProvider}> = () => import(
  /* name: 'provider.antdv' */
  './antdv')

import { AppContext } from 'vue'
import nutui from './nutui'
// import antdv from './antdv'
import { VNode } from 'vue'
import { CoreProvider } from '../shared'

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

export const getProvider: (name: string) => CoreProvider | Promise<CoreProvider> 
  = (name: string) => {
    let result = providers[name]
    if (typeof result === 'function') {
      return result().then(r => ({
        ...r.default,
        fallback: providers['nutui']
      }))
    }
    return result
  }

// export default providers