<template>
  <ns-page>
    <ns-page-header title="开关"
      fill="#ffffff88"
      :blur="40"
      reveal
      caption="<ns-switch>" has-back-button />
    <ns-page-content>
      <ns-column justify="center" :gap="10">
        <ns-switch v-model="on" />
      </ns-column>
      <code-view language="html" :code="codes[0]" />
      <callout type="info">
        <p>开关组件用于表示互斥的两个状态, 可以通过 <code>v-model</code> 绑定一个变量</p>
      </callout>
      <callout type="info">
        <p>暂不支持 <code>color</code> 属性</p>
      </callout>
      <callout type="info">
        <p>移动端不支持 <code>size</code> 属性</p>
      </callout>
      <h2>用于表单输入</h2>
      <p class="caption">需要使用 &lt;ns-switch-input&gt;</p>
      <ns-row justify="center">
        <ns-form v-model="formData">
          <ns-switch-input
            label="付费客户"
            name="付费客户"
            v-model="formData.付费客户" />
        </ns-form>
      </ns-row>
      <code-view language="html" :code="codes[1]" />
      <callout type="info">
        <p>用于表示状态时, <code>&lt;ns-switch&gt;</code> 可与 <code>&lt;ns-checkbox&gt;</code> 互换</p>
      </callout>
      <ns-row justify="end">
        <ns-button fill="#000"
          size="xs"
          link="/pages/components/checkbox/checkbox">另见: &lt;ns-checkbox&gt;</ns-button>
      </ns-row>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const on = ref(true)

const formData = reactive({
  付费客户: true
})

const codes = [
`<ns-switch v-model="on" :size />`,
`<ns-switch-input
  label="付费客户"
  name="付费客户"
  v-model="formData.付费客户" />`
]
</script>
