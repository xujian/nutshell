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

/**
 * 获取屏幕安全区域
 * 从系统 API 获取
 * @returns
 */
export function useSafeArea (): SafeArea {
  if (!wx) {
    return {
      status: 0,
      nav: 0,
      bottom: 0
    }
  }
  const systemInfo = wx.getSystemInfoSync(),
    capsule = wx.getMenuButtonBoundingClientRect()
  /**
   * 状态条高度
   */
  const status = systemInfo.statusBarHeight || 0,
    /**
     * 据说是胶囊上下间距
     */
    gap = capsule.top - status,
    nav = capsule.height + gap * 2,
    safeAreaBottom = systemInfo.safeArea?.bottom || 0,
    bottom = systemInfo.screenHeight - safeAreaBottom
  return {
    status,
    nav,
    bottom
  }
}
