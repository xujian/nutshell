import type { Component, ComputedOptions, MethodOptions } from 'vue'

/**
 * 对话框内嵌组件需要实现的方法
 */
export type PopupChildComponentMethods = {
  couldComplete: () => boolean | Promise<boolean>
  couldClose: () => boolean | Promise<boolean>
}

/**
 * 对话框内嵌组件
 */
export type PopupChildComponent = Component<
  any,any, any, ComputedOptions,
  PopupChildComponentMethods
>
