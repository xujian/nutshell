import { h, defineComponent, inject } from 'vue'
import { getProvider } from '../providers'

/**
 * Provider 体系的设计
 * 本组件库的组件不直接产生最终UI
 * 而是使用第三方组件
 * 基本的地方是组件选用的是 @nutui/nutui-taro
 * 选用是基于以下原因：
 *   1. 需要适配到小程序、H5、以及其他移动端
 *   2. 希望同一套组件可以延伸到桌面端
 *   3. 对于多端可以有一致的组件定义及样式
 */

/**
 * 所有组件在渲染时进入唯一的provider适配过程
 * 1. 首先适配 provider name
 * 2. 然后适配 component name
 * 3. 找不到时 fallback 到 "尚未实现"
 */

interface Provider {

}

/**
 * Global Provider
 */
export const useProvider = () => {
  const providerName = inject('provider') as string
  const provider = getProvider(providerName)
  return provider
}

export const prepareProvider = (app, providerName: string) => {
  const provider = getProvider(providerName)
  provider.then(({default: p}) => {
    p.prepare(app)
  })
}
