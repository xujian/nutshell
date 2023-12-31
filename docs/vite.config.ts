import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
import TestPlugin from './vite/test-plugin'
import StoriesPlugin from './vite/stories-plugin'

const nsRegex = /^Ns[A-Z][\w]+/
const NsResolver = (name: string) => {
  if (nsRegex.test(name)) {
    return {
      name: name,
      from: '@uxda/nutshell'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        }),
        NsResolver
      ]
    }),
    // Markdown(),
    // TestPlugin(),
    StoriesPlugin()
  ],
  server: {
    port: 2024,
    open: true,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
