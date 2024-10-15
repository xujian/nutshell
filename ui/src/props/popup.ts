import { inject, InjectionKey, Reactive } from 'vue'
import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'

/**
 * 浮窗状态
 */
export type PopupState = {
  /**
   * 允许关闭
   */
  couldClose: boolean,
  /**
   * 关闭之前执行的动作
   */
  beforeClose: () => boolean
}

/**
 * 浮窗状态 Inject Key
 */
export const PopupStateSymbol: InjectionKey<Reactive<PopupState>> = Symbol('ns-popup-state')

/**
 * 供 Dialog/Sheet 的子组件控制关闭时机(阻止浮窗关闭)
 * @returns
 */
export const usePopup = () => {
  return inject(PopupStateSymbol)
}


const popupProps = {
  /**
   * 浮层遮盖层
   */
  mask: {
    type: Boolean,
    default: true,
  },
  /**
   * 显示关闭按钮
   */
  closable: {
    type: Boolean,
  },
  /**
   * 模态浮窗
   * 当 :modal="true"时, 无法通过 click overlay 关闭
   */
  modal: {
    type: Boolean,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
}

export const usePopupProps = buildProps(popupProps)

export type PopupProps = MakePropsType<typeof popupProps>
