<template>
  <ns-page class="time-input-page" fill="neutral">
    <ns-page-header title="时间输入框"
      caption="<ns-time-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
          <ns-time-input
            v-model="formData.time"
            name="time"
            :rules="['required']"
            label="时间"
            placeholder="请输入时间" />
        <code-view language="html" :code="codes[0]" />
        <h2>加上秒</h2>
        <ns-card fill="#fff">
          <ns-time-input
            v-model="formData.time2"
            name="time2"
            has-seconds
            label="时间"
            placeholder="请输入时间" />
        </ns-card>
        <code-view language="html" :code="codes[1]" />
        <h2>步进15分钟</h2>
        <ns-card fill="#fff">
          <ns-time-input
            v-model="formData.time2"
            name="time2"
            :minute-step="15"
            label="时间"
            placeholder="请输入时间" />
        </ns-card>
        <code-view language="html" :code="codes[1]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  time: void 0,
  time2: void 0,
})

const codes = [
`<ns-time-input
  v-model="formData.time"
  name="time"
  :rules="['required']"
  label="时间"
  placeholder="请输入时间" />`,
`<ns-time-input
  v-model="formData.time"
  name="time"
  has-seconds
  label="时间"
  placeholder="请输入时间" />`,
]
</script>

<style lang="scss">

</style>

