<template>
  <ns-page class="input-page">
    <ns-page-header title="下拉输入框"
      caption="<ns-select>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-select
          v-model="formData.val1"
          :options="cities"
          placeholder="请选择" label="城市" />
        <code-view language="html" :code="codes[0]" />
        <h2>支持对展示结果格式化</h2>
        <ns-select
          v-model="formData.val2"
          :options="cities"
          :formatter="formatter"
          placeholder="请选择" label="城市" />
        <code-view language="html" :code="codes[1]" />
        <h2>对齐方式(props.variant === 'solid' ? 'left' : 'right')</h2>
        <ns-select
          v-model="formData.val1"
          :options="cities"
          variant="solid"
          placeholder="请选择" label="城市" />
        <code-view language="html" :code="codes[2]" />
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
const cities = [
  {label: '深圳', value: 10000 },
  {label: '广州', value: 10001 },
  {label: '上海', value: 10002 }
]

function formatter(e:any){
  return e + '-'
}

const codes = [
`<ns-select
  v-model="formData.val1"
  :options="cities"
  placeholder="请选择" label="城市" />`,
`function formatter(e:any){
  return e + '-' // 举个例子哈
}
<ns-select
  v-model="formData.val2"
  :options="cities"
  :formatter="formatter"
  placeholder="请选择" label="城市" />`,
`<ns-select
  v-model="formData.val1"
  :options="cities"
  variant="solid"
  placeholder="请选择" label="城市" />`
]
</script>

<style lang="scss">
</style>

