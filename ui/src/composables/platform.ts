import { InjectionKey, inject } from 'vue'

export type Screen = {
  width: number,
  height: number
}

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
  desktop: boolean,
  touch: boolean,
  weixin?: boolean,
  dingding?: boolean,
  screen: Screen
}


function getPlatform (): PlatformInstance {
  if (window && !('WeixinJSBridge' in window)) {
    // 还有微信开发工具内的情况
    const ua = window.navigator.userAgent
    const match = (regexp: RegExp) => Boolean(ua?.match(regexp))
    const android = match(/android/i)
    const ios = match(/iphone|ipad|ipod/i)
    const chrome = match(/chrome/i)
    const edge = match(/edge/i)
    const win = match(/win/i)
    const mac = match(/mac/i)
    const weixin = match(/MQQBrowser/i)
    console.log('===getPlatform', ua)
    return {
      android,
      ios,
      chrome,
      edge,
      win,
      mac,
      desktop: win || mac,
      weixin,
      touch: 'ontouchstart' in window,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  } else {
    const win = Taro.getWindowInfo()
    return {
      android: false,
      ios: false,
      chrome: false,
      edge: false,
      win: false,
      mac: false,
      desktop: false,
      touch: false,
      weixin: true,
      screen: {
        width: win.screenWidth,
        height: win.screenHeight,
      }
    }
  }
}

export function createPlatform () {
  const platform = getPlatform()
  return platform
}

export const PlatformSymbol: InjectionKey<PlatformInstance>
  = Symbol.for('nutshell:platform')


export function usePlatform (): PlatformInstance {
  const platform = inject(PlatformSymbol)
  return platform!
}
