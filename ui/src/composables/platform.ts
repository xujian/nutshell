import { InjectionKey, inject, reactive } from 'vue'
import { useApp } from '../components'
import { Device } from './safeArea'

export type Screen = {
  width: number,
  height: number
}

/**
 * 用户设备、浏览器及系统环境
 */
export interface PlatformInstance {
  android?: boolean,
  ios?: boolean,
  chrome?: boolean,
  edge?: boolean,
  win?: boolean,
  mac?: boolean,
  desktop?: boolean,
  mobile?: boolean,
  touch?: boolean,
  weixin?: boolean,
  dingding?: boolean,
  screen?: Screen,
  mock?: Device,
  h5?: boolean,
}

const $platform = reactive<PlatformInstance>({})


function getPlatform (): PlatformInstance {
  const app = useApp()
  if (window && !('WeixinJSBridge' in window)) {
    // 还有微信开发工具内的情况
    const ua = window.navigator.userAgent
    const match = (regexp: RegExp) => Boolean(ua?.match(regexp))
    const android = match(/android/i)
    // app.device == 'iphone-14'
    // 运行在 <mobile-mockup> 内
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
      desktop: win || mac,
      mobile: ios || android,
      weixin,
      touch: 'ontouchstart' in window,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      mock: app.mock,
      h5: true,
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
      mobile: true,
      desktop: false,
      touch: false,
      weixin: true,
      screen: {
        width: win.screenWidth,
        height: win.screenHeight,
      },
      mock: app.mock,
      h5: false,
    }
  }
}

export function createPlatform () {
  return $platform
}

export const PlatformSymbol: InjectionKey<PlatformInstance>
  = Symbol.for('nutshell:platform')


export function usePlatform (): PlatformInstance {
  const p = getPlatform()
  Object.assign($platform, p)
  return inject(PlatformSymbol)!
}
