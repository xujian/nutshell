import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'

export const DEAULT_NOTICE_DURATION: number = 4
export type NoticeType = 'info' | 'success' | 'error' | 'warning'

export type NoticeOptions = {
  /**
   * Notice 形式 'success' | 'error' | 'warning'
   */
  type?: string,
  /**
   * 停留时间
   */
  duration?: number,
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
