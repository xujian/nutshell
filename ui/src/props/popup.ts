import { MakePropsType } from '../utils'
import { buildProps } from '../utils/private/props'

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
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
}

export const usePopupProps = buildProps(popupProps)

export type PopupProps = MakePropsType<typeof popupProps>
