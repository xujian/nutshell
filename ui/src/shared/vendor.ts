import { inject, InjectionKey, App, VNode } from 'vue'
import { getVendor } from '../vendors'
import { DialogInstance, DialogOptions } from '../services/dialog'
import type { ToastOptions } from '../services/toast'
import type { LoadingOptions } from '../services/loading'
import { SetupContext } from 'vue'
/**
 * Vendor 体系的设计
 * 本组件库的组件不直接产生最终UI
 * 而是使用第三方组件
 * 基本的地方是组件选用的是 @nutui/nutui-taro
 * 选用是基于以下原因：
 *   1. 需要适配到小程序、H5、以及其他移动端
 *   2. 希望同一套组件可以延伸到桌面端
 *   3. 对于多端可以有一致的组件定义及样式
 */

/**
 * 所有组件在渲染时进入唯一的 vendor 适配过程
 * 1. 首先适配 vendor name
 * 2. 然后适配 component name
 * 3. 找不到时 fallback 到 "尚未实现"
 */


/**
 * Vendor的能力
 * prepare () 初始化所需要的资源
 * render (props) 依据属性渲染组件
 * // 交互能力
 * dialog(options) 弹出普通对话框
 * toast(message, options) 弹出普通消息
 * loading(options) 弹出 loading
 */

/**
 * VendorFallbacks
 * Vendor降级的逻辑
 * 1. 仅 Prime Vendor实现所有组件
 * 2. 现阶段 Prime Vendor是 Nutui
 * 3. PC端也用Nutui的组件
 * 4. 假如项目设置了 vendor = 'antdv'
 * 5. 则优先试用 Antdv Vendor
 * 6. 某组件在 Antdv 未实现时
 * 2. 依据策略实用 Prime Vendor(Nutui Vendor)
 */

/**
 * Nutshell Core Vendor
 * 
 */
export interface CoreVendor {
  app: App,
  prepare: (app) => void,
  render (props: Record<string, any>, ctx: SetupContext): VNode,
  dialog (options: DialogOptions): DialogInstance,
  toast (message: string, options: ToastOptions): void,
  loading (options: LoadingOptions): void,
  /**
   * 降级到 Prime Vendor
   */
  fallback?: CoreVendor
}

export const VendorSymbol: InjectionKey<CoreVendor | Promise<CoreVendor>>
  = Symbol.for('nutshell:vendor')

export const createVendor= (name: string): CoreVendor | Promise<CoreVendor> => {
  const vendor = getVendor(name)
  return vendor
}

/**
 * Global Vendor
 */
export const useVendor= (): CoreVendor | Promise<CoreVendor> => {
  const vendor = inject(VendorSymbol) as CoreVendor | Promise<CoreVendor>
  return vendor
}

export const prepareVendor= (app, vendor) => {
  Promise.resolve(vendor).then(p => {
      p.prepare(app)
  })
}
