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
   export async function getStory (name: string): Promise<{
    component: Component,
    source: string
   }>
}

declare module 'virtual:panels' {
  import { Component } from 'vue'
   export async function getPanel (name: string): Promise<{
    component: Component,
    source: string
   }>
}

declare module 'virtual:sheets' {
  import { Component } from 'vue'
   export async function getSheet (name: string): Promise<{
    component: Component,
    source: string
   }>
}
