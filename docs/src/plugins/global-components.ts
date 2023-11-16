import type { App, Component } from 'vue'
import Story from '../components/Story.vue'

const components: Record<string, Component> = {
  Story
}

const install = (app: App) => {
  Object.keys(components).forEach((name: string) => {
    app.component(name, components[name])
  })
}

export default {
  install
}