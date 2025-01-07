import { inject, InjectionKey, provide, reactive } from 'vue'

export type PopoverHostState = {
  classes: string[]
}

export const PopoverSymbol: InjectionKey<PopoverHostState>
  = Symbol.for('nutshell:popover:state')

/**
 * 在 popover 的父组件使用
 * 给 popover 提供访问记号
 */
export function usePopover (): PopoverHostState {
  const state = reactive<PopoverHostState>({
    classes: [
    ]
  })
  provide(PopoverSymbol, state)
  return state
}

/**
 * 在 Popover 里控制父组件状态
 * @returns
 */
export function usePopoverHost () {
  const state = inject(PopoverSymbol)
  return state!

}
