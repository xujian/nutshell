import { InjectionKey, inject } from 'vue'

/**
 * 用户设备、浏览器及系统环境
 */
export interface PlatformInstance {
  android: boolean,
  ios: boolean,
  chrome: boolean,
  edge: boolean,
  win: boolean,
  mac: boolean,
  touch: boolean,
  weixin?: boolean,
  dingding?: boolean,
}

function getPlatform (): PlatformInstance {
  const userAgent = window?.navigator.userAgent,
    env = Taro.getEnv()

  function match (regexp: RegExp) {
    return Boolean(userAgent?.match(regexp))
  }

  const android = match(/android/i)
  const ios = match(/iphone|ipad|ipod/i)
  const chrome = match(/chrome/i)
  const edge = match(/edge/i)
  const win = match(/win/i)
  const mac = match(/mac/i)
  const weixin = match(/MQQBrowser/i) || env === 'WEAPP'

  return {
    android,
    ios,
    chrome,
    edge,
    win,
    mac,
    weixin,
    touch: 'ontouchstart' in window
  }
}

export function createPlatform () {
  const platform = getPlatform()
  return platform
}

export const PlatformSymbol: InjectionKey<PlatformInstance>
  = Symbol.for('nutshell:platform')


export function usePlatform () {
  const platform = inject(PlatformSymbol)
  return platform
}
