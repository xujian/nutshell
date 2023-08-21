// const nutuiProvider: Promise<{default: CoreProvider}> = import(
//   /* name: 'provider.nutui' */
//   './nutui')
const antdvToImport: () => Promise<{default: CoreProvider}> = () => import(
  /* name: 'provider.antdv' */
  './antdv')

import nutui from './nutui'
// import antdv from './antdv'
import { VNode } from 'vue'

/**
 * Provider Fallbacks
 * Provider 降级的逻辑
 * 1. 仅 Prime Provider实现所有组件
 * 2. 现阶段 Prime Provider 是 Nutui
 * 3. PC端也用Nutui的组件
 * 4. 假如项目设置了 provider = 'antdv'
 * 5. 则优先试用 Antdv Provider
 * 6. 某组件在 Antdv 未实现时
 * 2. 依据策略实用 Prime Provider (Nutui Provider)
 */

/**
 * Nutshell Core Provider
 * 
 */
export interface CoreProvider {
  render: (props, ctx) => VNode,
  prepare: (app) => void,
  /**
   * 降级到 Prime Provider
   */
  fallback?: CoreProvider
}

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

export const getProvider: (name: string) => CoreProvider | Promise<Provider> 
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