import { type Component } from 'vue'
import { useBus } from '../../../composables'
import { DollarNutshell } from 'src/framework'

const sheet: DollarNutshell['sheet'] = (component, props) => {
  const $bus = useBus()
  $bus.emit('sheet', {
    component,
    props
  })
}

export default sheet
