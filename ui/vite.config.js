/// <reference types="histoire" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

const nutRegex = /^Nut[A-Z].*$/

const NutResolver = (name) => {
  if (nutRegex.test(name)) {
    const resolved = name.slice(3)
    return {
      name: resolved,
      from: '@nutui/nutui/dist/nutui.es.js',
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        NutResolver
      ],
    }),
  ],
  resolve: {
  },
  histoire: {
    // your Histoire configuration
  },
})