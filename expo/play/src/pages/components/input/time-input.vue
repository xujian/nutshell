<template>
  <ns-page class="time-input-page">
    <ns-page-header title="时间输入框"
      caption="<ns-time-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
        <h2>用法</h2>
        <ns-card fill="#fff">
          <ns-time-input
            v-model="formData.time"
            name="time"
            label="时间"
            placeholder="请选择时间" />
        </ns-card>
        <code-view language="html" :code="codes[0]" />
        <h2>加上秒</h2>
        <ns-card fill="#fff">
          <ns-time-input
            v-model="formData.time2"
            name="time2"
            has-seconds
            label="时间"
            placeholder="请选择时间" />
        </ns-card>
        <code-view language="html" :code="codes[1]" />
        <h2>步进15分钟</h2>
        <ns-card fill="#fff">
          <ns-time-input
            v-model="formData.time3"
            name="time3"
            :minute-step="15"
            label="时间"
            placeholder="请选择时间" />
        </ns-card>
        <code-view language="html" :code="codes[2]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  time: '15:00',
  time2: void 0,
  time3: void 0,
})

const codes = [
`<ns-time-input
  v-model="formData.time"
  name="time"
  label="时间"
  placeholder="请输入时间" />`,
`<ns-time-input
  v-model="formData.time2"
  name="time"
  has-seconds
  label="时间"
  placeholder="请输入时间" />`,
`<ns-time-input
  v-model="formData.time3"
  name="time2"
  :minute-step="15"
  label="时间"
  placeholder="请输入时间" />`
]
</script>

<style lang="scss">

</style>

