<template>
  <ns-page class="form-page">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h3>数字输入框</h3>
      <ns-card fill="#fff">
        <ns-form v-model="formData">
          <ns-number-input
            v-model="formData.count"
            name="count"
            :step="1"
            :min="90"
            :max="110"
            label="最大数量" />
          <ns-select
            v-model="formData.due"
            :options
            :formatter
            :rules="['required']"
            label="截止日期" />
        </ns-form>
      </ns-card>

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

const formatter = (value: number | string) => {
  const today = dayjs(),
    due = today.add(+value, 'day').format('YYYY-MM-DD')
  return value
    ? `${value}天, ${due}`
    : ''
}

const formData = reactive({
  count: 100,
  due: void 0
})

</script>

