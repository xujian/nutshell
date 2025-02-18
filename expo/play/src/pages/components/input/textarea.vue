<template>
  <ns-page class="input-page">
    <ns-page-header title="文本域"
      caption="<ns-textarea>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-textarea
          placeholder="请输入"
          v-model="formData.date1"
          />
        <code-view language="html" :code="codes[0]" />
        <h2>显示字数统计</h2>
        <ns-textarea
          placeholder="请输入"
          v-model="formData.date2"
          :maxlength="50"
          hasCount />
        <code-view language="html" :code="codes[1]" />
        <h2>高度自动拉伸</h2>
        <ns-textarea
          placeholder="请输入"
          v-model="formData.date3"
          :autosize="true" />
        <code-view language="html" :code="codes[2]" />
        <h2>行数（仅支持H5）</h2>
        <ns-textarea
          placeholder="请输入"
          v-model="formData.date4"
          :rows="6"/>
        <code-view language="html" :code="codes[3]" />
        <h2>禁用</h2>
        <ns-textarea
          placeholder="请输入"
          v-model="formData.date5"
          :disabled="true"/>
        <code-view language="html" :code="codes[4]" />
      </ns-form>
  </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  date1: '',
  date2: '',
  date3: '',
  date4: '',
  date5: '我是被禁用的文本'
})

const codes = [
`<ns-textarea
  placeholder="请输入"
  v-model="formData.date1"
  />`,
`<ns-textarea
  placeholder="请输入"
  v-model="formData.date2"
  :maxlength="50"
  hasCount />`,
`<ns-textarea
  placeholder="请输入"
  v-model="formData.date3"
  :autosize="true" />`,
`<ns-textarea
  placeholder="请输入"
  v-model="formData.date4"
  :rows="6"/>`,
`<ns-textarea
  placeholder="请输入"
  v-model="formData.date5"
  :disabled="true"/>`
]
</script>

<style lang="scss">
</style>

