import { defineSetupVue3 } from '@histoire/plugin-vue'
import { Nutshell } from '@uxda/nutshell'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const nutshell = Nutshell({
    vendor: 'antdv',
    theme: 'present'
  })
  app.use(nutshell)
})