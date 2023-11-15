import { defineComponent, h, type ExtractPublicPropTypes, type PropType } from 'vue'
import { VueLive } from 'vue-live'
import 'prismjs/themes/prism-tomorrow.css'
import DefaultLayout from './DefaultLayout.vue'
import 'vue-live/style.css'
import './CodeEditor.scss'

export const codeEditorProps = {
  code: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    default: 'markup',
    required: false,
  },
  components: {
    type: Object as PropType<Record<string, any>>,
    default: {},
    required: false,
  }
}

export type CodeEditorProps = ExtractPublicPropTypes<typeof codeEditorProps>

const handleError = (e: any) => {
  console.log('error:', e)
}

const CodeEditor = defineComponent((props) => {
  return () => h(VueLive, {
    class: 'ns-code-editor',
    code: props.code.trim(),
    components: props.components,
    layout: DefaultLayout,
    editorProps: {
      lineNumbers: true,
    },
    onError: handleError
  },)
}, {
  props: codeEditorProps,
})

export default CodeEditor
