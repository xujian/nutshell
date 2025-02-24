<template>
  <ns-page class="input-page">
    <ns-page-header title="按钮组输入框"
      caption="<ns-button-group-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-button-group-input label="状态"
          v-model="formData.val1"
          :options="[
            { label: '已跟进', value: 0 },
            { label: '未跟进', value: 1 }
          ]" />
        <code-view language="html" :code="codes[0]" />
      </ns-form>
  </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  val1: '',
})
const codes = [
`<ns-button-group-input label="状态"
  v-model="formData.val1"
  :options="[
    { label: '已跟进', value: 0 },
    { label: '未跟进', value: 1 }
  ]" />`
]
</script>

<style lang="scss">
</style>

