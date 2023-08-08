import { ObjectEmitsOptions } from 'vue'


export type Prettify<T> = { [K in keyof T]: T[K] } & {}

export type EmitsToProps<T extends ObjectEmitsOptions> = {
  [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
    ? T[Uncapitalize<C>] extends null
      ? (...args: any[]) => any
      : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any
        ? P
        : never
      ) => any : never;
  }