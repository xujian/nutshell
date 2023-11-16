declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module 'virtual:test' {
  export const test: string
}

declare module 'virtual:stories' {
  import { Component } from 'vue'
   export async function getStory (name: string): PromiseM<{
    component: Component,
    source: string
   }>
}