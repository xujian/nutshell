import { defineComponent, h } from 'vue'
import { MakePropsType } from '../../utils'
import { buildDesignClasses, buildDesignStyles, useDesignProps } from '../../props'
import { usePage } from './Page'

export const pageFooterProps = {
  sunk: {
    type: Boolean
  },
  ...useDesignProps()
}

export type PageFooterProps = MakePropsType<typeof pageFooterProps>

export const NsPageFooter = defineComponent({
  name: 'NsPageFooter',
  props: pageFooterProps,
  setup (props, { slots }) {

    const page = usePage()
    page && (page.hasFooter = true)

    const style = {
      ...buildDesignStyles(props),
    }

    return () => h('div', {
      class: [
        'page-footer',
        ...props.sunk ? ['sunk'] : [],
        ...buildDesignClasses(props),
      ],
      style,
    }, slots)

  }
})
