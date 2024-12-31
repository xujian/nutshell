declare module 'odometer' {
}

declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}

declare var wx: any

declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}
