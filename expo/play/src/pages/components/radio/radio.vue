<template>
  <ns-page>
    <ns-page-header title="单选框"
      caption="<ns-radio>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-radio-group v-model="formData.val1" label="选项">
          <ns-radio value="1" label="选项1"></ns-radio>
          <ns-radio value="2" label="选项2"></ns-radio>
        </ns-radio-group>
        <code-view language="html" :code="codes[0]" />
        <h2>禁用用法</h2>
        <ns-radio-group v-model="formData.val2" label="选项" disabled>
          <ns-radio value="1" label="选项1"></ns-radio>
          <ns-radio value="2" label="选项2"></ns-radio>
        </ns-radio-group>
        <code-view language="html" :code="codes[1]" />
        <ns-radio-group
          label="选项(禁用个别项)"
          v-model="formData.val2"
          :options="[
            { label: '是', value: 1, disabled: true },
            { label: '否', value: 0 },
          ]" />
        <code-view language="html" :code="codes[2]" />
        <h2>options用法(不需要ns-radio)</h2>
        <ns-radio-group
          label="选项"
          v-model="formData.val3"
          :options="[
            { label: '是', value: 1 },
            { label: '否', value: 0 },
          ]" />
        <code-view language="html" :code="codes[3]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  val1: '',
  val2: '',
  val3: ''
})

const codes = [
`<ns-radio-group v-model="formData.val1" label="选项">
    <ns-radio value="1" label="选项1"></ns-radio>
    <ns-radio value="2" label="选项2"></ns-radio>
  </ns-radio-group>`,
`<ns-radio-group v-model="formData.val2" label="选项"
disabled>
    <ns-radio value="1" label="选项1"></ns-radio>
    <ns-radio value="2" label="选项2"></ns-radio>
  </ns-radio-group>`,
`<ns-radio-group
  label="选项(禁用个别项)"
  v-model="formData.val2"
  :options="[
    { label: '是', value: 1, disabled: true },
    { label: '否', value: 0 },
  ]" />`,
`<ns-radio-group
  label="选项"
  v-model="formData.val2"
  :options="[
  { label: '是', value: 1 },
  { label: '否', value: 0 },]" />`
]
</script>

<style lang="scss">

</style>

