<template>
  <ns-page>
    <ns-page-header title="复选框"
      caption="<ns-checkbox>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-checkbox v-model="formData.val1" label="复选框">复选框</ns-checkbox>
        <ns-checkbox v-model="formData.val1" text-position="left">复选框</ns-checkbox>
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
`<ns-checkbox-group color="primary"
  v-model="formData.val1"
  :options="[
    { label: '选项一', value: 1 },
    { label: '选项二', value: 0 },
  ]"
  label="选项" />`,
]
</script>

<style lang="scss">

</style>

