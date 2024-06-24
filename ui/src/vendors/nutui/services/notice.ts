import { type Component } from 'vue'
import { useBus } from '../../../composables'
import { DollarNutshell } from '../../../framework'

const notice: DollarNutshell['notice'] = (message, options) => {
  const $bus = useBus()
  $bus.emit('notice', {
    message,
    options
  })
}

export default notice
