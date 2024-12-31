import getNutuiVendor from './nutui'
import { CoreVendor } from '../shared/models/CoreVendor'

const antdvToImport: () => Promise<{default: CoreVendor}> = () => import(
  /* name: 'vendor.antdv' */
  './antdv')

export interface ImportedVendor {
  default: CoreVendor
}

export type AsyncVendor = () => Promise<{default: CoreVendor}>

export const getVendor: (name: string) => CoreVendor | Promise<CoreVendor>
  = (name: string) => {
    const vendors: Record<string, CoreVendor | AsyncVendor> = {
      nutui: getNutuiVendor(),
      antdv: antdvToImport
    }
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
