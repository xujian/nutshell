import { App, Component } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'
import { PopupChildComponent } from './types'

export type SheetOptions = {
  title?: string,
  /**
   * 嵌入子组件
   */
  component?: PopupChildComponent,
  /**
   * 透传给子组件的属性
   */
  props?: any,
  closable?: boolean,
  height?: number,
  mask?: boolean,
  destroyOnClose?: boolean,
}

/**
 * Sheet Service
 * Dynamically create a toast
 * Usage: $n.sheet(component?: Component, pros?: any)
 *  $n.\
 */
export default {
  install (app: App, $n: DollarNutshell) {
    const vendor = app._context.provides[VendorSymbol as symbol]
    $n.sheet = (component?: Component, pros?: any) => {
      Promise.resolve(vendor).then(p => {
        p.sheet(component, pros)
      })
    }
  }
}
