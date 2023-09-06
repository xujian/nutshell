import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

/**
 * 加入Vite Plugin: unplugin-vue-components
 */
const nsRegex = /^Ns[A-Z][\w]+/
const NsResolver = (name: string) => {
  // console.log('NsResolver===================================name', name)
  if (nsRegex.test(name)) {
    return {
      name: name,
      from: 'nutshell'
    }
  }
}

export default defineConfig({
  define: {
    'process.env': process.env
  },
  build: {
    minify: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules']
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
        NsResolver
      ],
      dts: true,
    }),
    // AutoImport({
    //   dts: true,
    //   include: [
    //     /\.vue$/,
    //   ],
    //   eslintrc: {
    //     enabled: true,
    //   },
    //   resolvers: [
    //     NsResolver
    //   ]
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
