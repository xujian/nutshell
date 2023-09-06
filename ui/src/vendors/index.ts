// const nutuiVendor: Promise<{default: CoreVendor}> = import(
//   /* name: 'vendor.nutui' */
//   './nutui')
const antdvToImport: () => Promise<{default: CoreVendor}> = () => import(
  /* name: 'vendor.antdv' */
  './antdv')

import { AppContext } from 'vue'
import nutui from './nutui'
// import antdv from './antdv'
import { VNode } from 'vue'
import { CoreVendor } from '../shared'

/**
 * 似乎不能按需加载
 */
const vendors = {
  nutui,
  antdv: antdvToImport
}

export interface ImportedVendor {
  default: CoreVendor
}

export const getVendor: (name: string) => CoreVendor | Promise<CoreVendor> 
  = (name: string) => {
    let result = vendors[name]
    if (typeof result === 'function') {
      return result().then(r => ({
        ...r.default,
        fallback: vendors['nutui']
      }))
    }
    return result
  }

// export default vendors