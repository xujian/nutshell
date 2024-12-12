import { usePlatform } from './platform'
/**
 * 屏幕安全区域
 */
export type SafeArea = {
  /**
   * 状态条高度
   */
  status: number,
  /**
   * 导航条区域(胶囊)
   */
  nav: number,
  /**
   * 屏幕底部范围
   */
  bottom: number,
  /**
   * 专门用来表示胶囊上下间距
   * 为了不与 flex: gap 冲突
   */
  gutter?: number,
  /**
   * 屏幕底部范围
   */
  capsule?: number,
}

export type Device =
  'iphone-x' | 'iphone-14' | 'android'

/**
 * 手机型号具体尺寸
 */
const devices: Record<Device, SafeArea> = {
  'iphone-x': {
    status: 40,
    nav: 40,
    bottom: 0
  },
  'iphone-14': {
    status: 59,
    nav: 40,
    bottom: 0
  },
  'android': {
    status: 32,
    nav: 40,
    bottom: 0,
  }
}

/**
 * 获取屏幕安全区域
 * 从系统 API 获取
 * @returns
 */
export function useSafeArea (device?: Device): SafeArea {
  const platform = usePlatform()
  if (platform.mock) {
    return devices[platform.mock]
  }
  if (platform.desktop) {
    return {
      status: 0,
      nav: 0,
      bottom: 0
    }
  }
  const d = device || 'iphone-14'
  const env = Taro.getEnv() as string
  if (env !== 'WEAPP') {
    return devices[d]
  }
  const { screenHeight, statusBarHeight: status, safeArea } = wx.getWindowInfo(),
    capsule = wx.getMenuButtonBoundingClientRect(),
    /**
     * 据说是胶囊上下间距
     */
    gutter = capsule.top - status,
    nav = capsule.height + gutter * 2,
    bottom = Math.abs(screenHeight - safeArea.bottom)
  return {
    status,
    nav,
    bottom,
    gutter,
    capsule: capsule.height
  }
}
