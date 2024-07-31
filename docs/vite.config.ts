import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VirtualPlugin from './vite/virtual-plugin'

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
    VirtualPlugin('stories'),
    VirtualPlugin('panels'),
    VirtualPlugin('boards'),
  ],
  server: {
    port: 2024,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:2024',
        // target: 'http://simple.shensi.tech',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
