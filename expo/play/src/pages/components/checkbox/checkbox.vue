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
      <code-view language="html" :code="codes[1]" />
      <h2>checkboxGroup使用</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group v-model="formData.val5">
          <ns-checkbox label="1">复选框</ns-checkbox>
          <ns-checkbox label="2">复选框</ns-checkbox>
        </ns-checkbox-group>
        <div>已选中 {{formData.val5}}</div>
      </ns-card>
      <code-view language="html" :code="codes[2]" />
      <h2>checkboxGroup(最大可选数)</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group v-model="formData.val6" max="2">
          <ns-checkbox label="A">A</ns-checkbox>
          <ns-checkbox label="B">B</ns-checkbox>
          <ns-checkbox label="C">C</ns-checkbox>
          <ns-checkbox label="D">D</ns-checkbox>
        </ns-checkbox-group>
        <div>已选中 {{formData.val6}}</div>
      </ns-card>
      <code-view language="html" :code="codes[3]" />
      <ns-checkbox v-model="formData.val1" shape="button"> Button </ns-checkbox>
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
  val5: [],
  val6: []
})

const codes = [
`<ns-card body-fill="#ffffff">
    <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
    <ns-checkbox v-model="formData.val2" text-position="right">复选框</ns-checkbox>
  </ns-card>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox v-model="formData.val3" disabled>未选时禁用状态</ns-checkbox>
  <ns-checkbox v-model="formData.val4" disabled>选中时禁用状态</ns-checkbox>
</ns-card>`,
`<ns-checkbox-group v-model="formData.val5">
  <ns-checkbox label="1">复选框</ns-checkbox>
  <ns-checkbox label="2">复选框</ns-checkbox>
</ns-checkbox-group>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox-group v-model="formData.val6" max="2">
    <ns-checkbox label="A">A</ns-checkbox>
    <ns-checkbox label="B">B</ns-checkbox>
    <ns-checkbox label="C">C</ns-checkbox>
    <ns-checkbox label="D">D</ns-checkbox>
  </ns-checkbox-group>
  <div>已选中 {{formData.val6}}</div>
</ns-card>`
]
</script>

<style lang="scss">

</style>

