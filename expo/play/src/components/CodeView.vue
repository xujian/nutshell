<script lang="ts" setup>
import Prism from 'prismjs'
import 'vue-live/style.css'
import './prism-z-touch.css'

export type CodeViewProps = {
  code: string,
  language: string
}

const props = defineProps<CodeViewProps>()

const language = props.language || 'markup'
const prismLanguage = Prism.languages[language],
  html = Prism.highlight(props.code.trim(), prismLanguage, prismLanguage as string)
</script>

<template>
  <pre :class="['ns-code-view', `language-${props.language}`]"><rich-text class="content r-sm" :nodes="html" /></pre>
</template>

<style lang="scss">
.ns-code-view {
  border-radius: var(--ns-r);
  width: 100%;
  &[class*="language-"] {
    padding: 0;
    margin: 1em 0;
    font-size: 12px;
    line-height: 1em;
  }
  .token.attr-name,
  .token.inserted {
    font-style: normal;
  }
  .content {
    border-radius: 0;
    display: block;
    padding: 1em;
    font-family: "Jetbrains Mono", "Fira code", "Fira Mono", Consolas, Menlo, Courier, monospace;
  }
}

</style>
