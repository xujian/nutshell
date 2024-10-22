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
  bottom: number
}

export type PhoneModel =
  'iphone-x' | 'iphone-14'

/**
 * 手机型号具体尺寸
 */
const models: Record<PhoneModel, SafeArea> = {
  'iphone-x': {
    status: 40,
    nav: 40,
    bottom: 0
  },
  'iphone-14': {
    status: 59,
    nav: 40,
    bottom: 0
  }
}

/**
 * 获取屏幕安全区域
 * 从系统 API 获取
 * @returns
 */
export function useSafeArea (model?: PhoneModel): SafeArea {
  const m = model || 'iphone-14'
  const env = Taro.getEnv() as string
  if (env !== 'WEAPP') {
    return models[m]
  }
  const { screenHeight, statusBarHeight: status, safeArea } = wx.getWindowInfo(),
    capsule = wx.getMenuButtonBoundingClientRect(),
    /**
     * 据说是胶囊上下间距
     */
    gap = capsule.top - status,
    nav = capsule.height + gap * 2,
    bottom = screenHeight - safeArea.bottom
  console.log('===safeArea', { status, nav, bottom })
  return {
    status,
    nav,
    bottom
  }
}
