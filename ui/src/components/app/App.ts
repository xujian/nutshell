import { PropType, ExtractPublicPropTypes, ObjectEmitsOptions, SlotsType, ComponentObjectPropsOptions, defineComponent, h } from 'vue'
import { Color } from '../../composables/theme'

const appProps = {
  theme: {
    type: String,
    default: 'incumbent'
  }
}

/**
 * 应用根组件 <ns-app>
 */
export const NsApp = defineComponent({
  name: 'NsApp',
  props: appProps,
  setup (props, ctx) {
    // What NsApp do:
    // 1. initiates global configs/settings
    // 2. provides system values and state
    // 3. listens to app level events
    const { slots } = ctx
    const classes = [
      'ns-app',
      `app-theme-${props.theme}`,
    ].join(' ')
  
    return () => h('div', {
      class: classes,
    }, slots)
  },
})