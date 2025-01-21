<template>
  <ns-page class="popover-page">
    <ns-page-header title="弹出气泡" has-back-button />
    <ns-page-content>
      <callout>
        <p>弹出气泡内嵌于可点击组件(&lt;ns-button&gt;)之上</p>
      </callout>
      <p>&nbsp;</p>
      <callout>
        <p>弹出气泡可内嵌菜单(&lt;ns-menu&gt;), 或其他内容</p>
      </callout>
      <p>&nbsp;</p>
      <ns-button color="primary" class="full-width" label="处理...">
        <ns-popover fill="#fff">
          <ns-menu fill="transparent" :items="commands" />
        </ns-popover>
      </ns-button>
      <code-view language="html" :code="codes[0]" />
      <h3>使用填色</h3>
      <ns-button color="primary" class="full-width" label="...">
        <ns-popover fill="#333333" stroke="#444" title="指令">
          <ns-menu fill="transparent" :items="commands" />
        </ns-popover>
      </ns-button>
      <ns-form name="main" v-model="formData"></ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'


const commands = [
    { label: '撤销', name: 'cancel' },
    { label: '延期处理', name: 'postpone' },
    { label: '删除', name: 'delete' },
  ]

const codes: string[] = [
  `<ns-button color="primary"
  class="full-width has-popover"
  label="处理...">
  <ns-popover fill="#fff">
    <ns-menu
      fill="transparent"
      :items="commands" />
  </ns-popover>
</ns-button>`
]

const formData = reactive({})
</script>
