<template>
  <ns-page fill="neutral">
    <ns-page-header title="按钮组"
      fill="#fff"
      caption="<ns-button-group>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-row class="padding" align="center" justify="center">
        <ns-button-group
          v-model="state.selected"
          :items />
      </ns-row>
      <code-view language="html" :code="codes[0]" />
      <code-view language="javascript" :code="codes[1]" />
      <callout>
        <p><span class="b">按钮组</span>用于显示一个选择状态, 或可与&lt;ns-tabs&gt;互换</p>
      </callout>
      <h2>按钮组输入框</h2>
      <ns-card fill="#ffffff88" class="breakout">
        <callout>
          <p>需要在表单内输入时, 需要换成<span class="b">&lt;ns-button-group-input&gt;</span></p>
        </callout>
        <ns-form>
          <ns-button-group-input
            v-model="state.selected"
            label="跟进状态"
            :options="items" />
        </ns-form>
        <code-view language="html" :code="codes[2]" />
        <ns-row justify="end" class="my-md">
          <ns-button fill="#000"
            size="xs"
            link="/components/button-group-input">另见: &lt;ns-button-group-input&gt;</ns-button>
        </ns-row>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  selected: '1'
})
const items = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]

const codes = [
`<ns-button-group
  v-model="state.selected"
  color="primary"
  :items />`,
`const items = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]`,
`<ns-button-group-input
  v-model="state.selected"
  label="跟进状态"
  :options="items" />`
]
</script>
