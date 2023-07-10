import { withDirectives, h } from 'vue'
import { createComponent } from '../../utils/private/create'


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
    return () => (
      <div class="n-button primary">
        {props.label}
      </div>
    )
  }
})