import { withDirectives, h } from 'vue'
import { createComponent } from '../../utils/private/create'

type ButtonTypes = 'plain' | 'primary' | 'danger' | 'warning'

/**
 * <n-button>
 */
export default createComponent({
  name: 'NButton',
  props: {
    type: {
      type: String,
      default: 'plain'
    },
    label: String,
  },
  emits: ['click'],
  setup (props, {slots, emit}) {
    return () => {
      return h('div', {
        class: 'n-button'
      }, h('div', {
      }, props.label))
    }
  }
})