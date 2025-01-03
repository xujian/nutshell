import type { AsyncComponentLoader, ComponentObjectPropsOptions, ComponentOptionsMixin, DefineComponent, ObjectEmitsOptions, Slots } from 'vue'
import { defineAsyncComponent } from 'vue'

/**
 * 组件内嵌的组件或异步组件
 */
export type ChildComponent = DefineComponent<any> | AsyncComponentLoader

export type DateAsStringOrNumber = string | number | undefined

export type DateRange = [DateAsStringOrNumber, DateAsStringOrNumber]

export const DATE_FORMAT = 'YYYY-MM-DD'
