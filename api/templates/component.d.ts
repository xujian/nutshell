import type { AllowedComponentProps, ComponentPublicInstance, FunctionalComponent, RenderFunction, VNodeChild, VNodeProps } from 'vue'
import type { Ns__component__ } from '@uxda/nutshell'

type StripProps = keyof VNodeProps | keyof AllowedComponentProps | 'v-slots' | '$children' | `v-slot:${string}`
type Event = `on${string}`

type Props<T> = T extends { $props: infer P extends object }
    ? {
        [K in Exclude<keyof P, StripProps | Event>]: Exclude<P[K], undefined> extends VNodeProps
          ? unknown
          : P[K]
      }
    : never

type Events<T> = T extends { $props: infer P extends object }
  ? {
    [K in Exclude<keyof P, StripProps> as K extends `on${infer N}`
      ? Uncapitalize<N>
      : never
    ]: Exclude<P[K], undefined> extends ((...args: any[]) => any)
      ? Parameters<Exclude<P[K], undefined>>
      : never
  }
  : never

export type ComponentProps = Props<Ns__component__>
export type ComponentEvents = Events<Ns__component__>

type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : symbol extends K
        ? never
        : K
  ]: T[K]
}

type Slot<T extends any[] = any[]> = (...args: T) => VNodeChild
type Slots<
  T extends { $props: any },
  S = '$children' extends keyof T['$props'] ? Exclude<T['$props']['$children'], VNodeChild> : never
> = '$children' extends keyof T['$props']
  ? ExcludeEmpty<{ [K in keyof S]-?: Exclude<S[K], undefined> extends Slot<infer A> ? A[0] : never }>
  : never

type AtLeastOne<T, U = {[K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]
type ExcludeEmpty<T> = T extends AtLeastOne<T> ? T : never

export type ComponentSlots = Slots<Ns__component__>

type ExtractExposed<T> = T extends (...args: any[]) => infer R
  ? R extends Promise<any>
    ? never
    : R extends RenderFunction
      ? never
      : R extends void
        ? never
        : R extends HTMLElement
          ? never
          : R extends object
            ? RemoveIndex<R>
            : never
  : never

export type ComponentExposed = ExtractExposed<Ns__component__['$options']['setup']>
