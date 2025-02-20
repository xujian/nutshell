<template>
  <ns-page>
    <ns-page-header title="开关输入框"
      caption="<ns-switch-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
        <h2>基础用法</h2>
        <ns-switch-input
          label="开关"
          v-model="formData.val1" />
        <code-view language="html" :code="codes[0]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  val1: false
})

const codes = [
`<ns-switch-input
  label="开关"
  v-model="formData.val1" />`
]
</script>
