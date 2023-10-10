import { InjectionKey } from 'vue'
import { CoreVendor } from './vendor'

export const VendorSymbol: InjectionKey<CoreVendor | Promise<CoreVendor>>
  = Symbol.for('nutshell:vendor')