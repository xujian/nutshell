import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell, NoticeOptions, NoticeType } from '../types'

export const DEAULT_NOTICE_DURATION: number = 4


export type Notice = {
  options?: {
    type?: NoticeType,
    duration?: number,
  }
  message: string
}

/**
 * Notice Service
 * Dynamically create a Notice
 * Usage:
 *  $n.dialog(options: NoticeOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    const vendor = app._context.provides[VendorSymbol as symbol]
    $n.notice = (message: string, options?: NoticeOptions) => {
      Promise.resolve(vendor).then(p => {
        p.notice(message, options)
      })
    }
  }
}
