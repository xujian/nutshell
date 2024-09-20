import { defineComponent, h, inject, PropType } from 'vue'
import { MakePropsType } from '../../utils'
import { useSafeArea } from '../../composables'
import { buildDesignClasses, buildDesignStyles, buildDesignVariables, type TextAlign, useDesignProps } from '../../props'
import { usePage } from './Page'

export const pageFooterProps = {
  ...useDesignProps()
}

export type PageFooterProps = MakePropsType<typeof pageFooterProps>

export const NsPageFooter = defineComponent({
  name: 'NsPageFooter',
  props: pageFooterProps,
  setup (props, { slots }) {

    const page = usePage()
    page && (page.hasFooter = true)
    console.log('===pageFooter', page)

    const style = {
      ...buildDesignStyles(props),
    }

    return () => h('div', {
      class: [
        'page-footer',
        ...buildDesignClasses(props),
      ],
      style,
    }, slots)
  }
})
