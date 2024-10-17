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
  if (window) {
    const userAgent = window?.navigator.userAgent

    const match = (regexp: RegExp) => Boolean(userAgent?.match(regexp))

    const android = match(/android/i)
    const ios = match(/iphone|ipad|ipod/i)
    const chrome = match(/chrome/i)
    const edge = match(/edge/i)
    const win = match(/win/i)
    const mac = match(/mac/i)
    const weixin = match(/MQQBrowser/i)

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
  } else {
    const env = Taro.getEnv(),
      app = Taro.getAppInfo()
    console.log('===usePlatform', app)
    return {
      android: false,
      ios: false,
      chrome: false,
      edge: false,
      win: false,
      mac: false,
      touch: false,
      weixin: env === 'WEAPP'
    }
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
