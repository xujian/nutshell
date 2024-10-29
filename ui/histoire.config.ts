import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  // your Histoire configuration
  setupFile: '/histoire.setup.ts',
  plugins: [HstVue()],
  vite: {
    server: {
      port: 2025,
    },
  },
  viteNodeInlineDeps: [
    '@nutui/nutui-taro'
  ]
})
