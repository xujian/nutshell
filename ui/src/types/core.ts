import { IconFormat } from '../components/icon'
import type { AsyncComponentLoader, DefineComponent, InjectionKey } from 'vue'
import { inject } from 'vue'
import { DollarNutshell } from './interactive'

/**
 * 组件内嵌的组件或异步组件
 */
export type ChildComponent = DefineComponent<any> | AsyncComponentLoader

export type DateAsStringOrNumber = string | number | undefined

export type DateRange = [DateAsStringOrNumber, DateAsStringOrNumber]

export const DATE_FORMAT = 'YYYY-MM-DD'

export const NutshellSymbol: InjectionKey<DollarNutshell>
  = Symbol.for('nutshell:nutshell')

/**
 * Nulshell framework options holding by app
 */
export interface NutshellOptions {
  theme?: string,
  vendor?: string,
  icon?: IconFormat
}
/**
 * 返回 $n 供应用程序使用
 */
export function useNutshell () {
  const $n = inject(NutshellSymbol)!
  return $n
}
