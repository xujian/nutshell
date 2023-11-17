import { defineComponent, h, type ExtractPublicPropTypes, type PropType } from 'vue'
import Prism from 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'
import 'vue-live/style.css'
import './CodeView.scss'
import './prism-z-touch.css'

export const codeViewProps = {
  code: {
    type: String,
    required: false
  },
  components: {
    type: Object as PropType<Record<string, any>>,
    required: false
  },
  language: {
    type: String,
    required: false
  }
}

export type CodeViewProps = ExtractPublicPropTypes<typeof codeViewProps>

const CodeView = defineComponent(
  (props, { attrs }) => {
    const language = props.language || 'markup'
    const prismLanguage = Prism.languages[language]

    return () =>
      h(
        'pre',
        {
          class: [
            'ns-code-view',
            'language-vue'
          ],
          ...attrs
        },
        [
          h('code', {
            class: ['ns-code-view-content', 'r-sm'],
            ...attrs,
            innerHTML: Prism.highlight(props.code.trim(), Prism.languages.markup, prismLanguage as string)
          })
        ]
      )
  },
  {
    props: codeViewProps
  }
)

export default CodeView
