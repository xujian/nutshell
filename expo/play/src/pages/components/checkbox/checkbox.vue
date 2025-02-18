<template>
  <ns-page>
    <ns-page-header title="复选框"
      caption="<ns-checkbox>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法(左右)</h2>
        <ns-card body-fill="#ffffff">
          <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
          <ns-checkbox v-model="formData.val2" text-position="right">复选框</ns-checkbox>
        </ns-card>
        <code-view language="html" :code="codes[0]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  val1: '',
  val2: ''
})

const codes = [
`<ns-card body-fill="#ffffff">
  <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
  <ns-checkbox v-model="formData.val2">复选框</ns-checkbox>
</ns-card>`,
]
</script>

<style lang="scss">

</style>

