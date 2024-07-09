import nutui from './nutui'
// import antdv from './antdv'
import { CoreVendor } from '../shared/models/CoreVendor'

// const nutuiVendor: Promise<{default: CoreVendor}> = import(
//   /* name: 'vendor.nutui' */
//   './nutui')
const antdvToImport: () => Promise<{default: CoreVendor}> = () => import(
  /* name: 'vendor.antdv' */
  './antdv')

/**
 * 似乎不能按需加载
 */
const vendors: Record<string, CoreVendor | AsyncVendor> = {
  nutui,
  antdv: antdvToImport
}

export interface ImportedVendor {
  default: CoreVendor
}

export type AsyncVendor = () => Promise<{default: CoreVendor}>

export const getVendor: (name: string) => CoreVendor | Promise<CoreVendor>
  = (name: string) => {
    let v = vendors[name]
    if (v instanceof Function) {
      return new Promise<CoreVendor>((resolve, reject) => {
        (v as AsyncVendor)().then(r => {
          resolve({
            ...r.default,
            fallback: vendors['nutui'] as CoreVendor
          })
        })
      })
    } else {
      return v
    }
  }
