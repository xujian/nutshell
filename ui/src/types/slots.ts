import { VNode } from 'vue'


export type VueSlot<T> = [T] extends [never]
  ? () => VNode[]
  : (arg: T) => VNode[]

export type MakeSlots<T extends RawSlots> = {
  [K in keyof T]: VueSlot<T[K]>
}

declare const SlotSymbol: unique symbol

export type SlotsType<T extends Record<string, any> = Record<string, any>> = {
  [SlotSymbol]?: T
}

type RawSlots = {
  [name: string]: unknown;
  $stable?: boolean;
}

