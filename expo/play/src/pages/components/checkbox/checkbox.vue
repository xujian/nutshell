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
      <h2>禁用状态</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox v-model="formData.val3" disabled>未选时禁用状态</ns-checkbox>
        <ns-checkbox v-model="formData.val4" disabled>选中时禁用状态</ns-checkbox>
      </ns-card>
      <h2>checkboxGroup使用</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group v-model="formData.val5" disabled>
          <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
          <ns-checkbox v-model="formData.val2">复选框</ns-checkbox>
        </ns-checkbox-group>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  val1: '',
  val2: '',
  val3: false,
  val4: true,
  val5: []
})

const codes = [
`<ns-card body-fill="#ffffff">
    <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
    <ns-checkbox v-model="formData.val2" text-position="right">复选框</ns-checkbox>
  </ns-card>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox v-model="formData.val3" disabled>未选时禁用状态</ns-checkbox>
  <ns-checkbox v-model="formData.val4" disabled>选中时禁用状态</ns-checkbox>
</ns-card>`
]
</script>

<style lang="scss">

</style>

