<template>
  <ns-page class="form-page" fill="neutral">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
        <h3>数字输入框</h3>
        <ns-card fill="#fff">
          <ns-number-input
            v-model="formData.count"
            name="count"
            :step="1"
            :min="90"
            :max="110"
            label="最大数量" />
      </ns-card>
      <h3>选择框</h3>
      <ns-card fill="#fff">
        <ns-select
          v-model="formData.due"
          :options
          :formatter
          :rules="['required']"
          label="截止日期" />
      </ns-card>
      <h3>按钮组</h3>
      <ns-card fill="#fff" color-mode="light">
        <ns-button-group-input label="跟进状态"
          v-model="formData.followup"
          :options="followupOptions" size="xs" />
      </ns-card>
      <h3>开关</h3>
      <ns-card fill="#fff" color-mode="light">
        <ns-switch-input label="允许撤销" v-model="formData.allowCancel" />
      </ns-card>
    </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import dayjs from 'dayjs'

const options = [
  { label: '1天', value: 1 },
  { label: '2天', value: 2 },
  { label: '3天', value: 3 },
  { label: '4天', value: 4 },
  { label: '5天', value: 5 },
]

const followupOptions = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]

const formatter = (value: number | string) => {
  const today = dayjs(),
    due = today.add(+value, 'day').format('YYYY-MM-DD')
  return value
    ? `${value}天, ${due}`
    : ''
}

const formData = reactive({
  count: 100,
  due: void 0,
  followup: void 0,
  allowCancel: void 0
})

</script>

