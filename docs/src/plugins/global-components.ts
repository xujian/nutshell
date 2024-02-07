import type { App, Component } from 'vue'
import Story from '../components/Story.vue'
import Panel from '../components/Panel.vue'
import Board from '../components/Board.vue'
import CodeView from '../components/code/CodeView'

const components: Record<string, Component> = {
  Story,
  Panel,
  Board,
  CodeView
}

const install = (app: App) => {
  Object.keys(components).forEach((name: string) => {
    app.component(name, components[name])
  })
}

export default {
  install
}
