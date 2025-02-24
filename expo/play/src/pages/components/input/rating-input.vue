<template>
  <ns-page class="input-page">
    <ns-page-header title="星星输入框"
      caption="<ns-rating-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-rating-input label="等级"
          v-model="formData.val1"
         />
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
`<ns-rating-input label="等级"
  v-model="formData.val1"
  />`
]
</script>

<style lang="scss">
</style>

