import { InjectionKey } from 'vue'
import { CoreVendor } from '../shared/models/CoreVendor'

export const VendorSymbol: InjectionKey<CoreVendor | Promise<CoreVendor>>
  = Symbol.for('nutshell:vendor')
