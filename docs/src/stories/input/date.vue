<template>
  <ns-form v-model="formData">
    <ns-date-input name="registerDate" label="选择日期"
      v-model="formData.registerDate"
      :rules="['required']" />
    <h3 class="my-lg">日期输入框带时间</h3>
    <ns-date-input name="registerDate" label="选择时间"
      has-time
      time-format="HH"
      format="YYYY-MM-DD HH:mm"
      v-model="formData.registerDateTime"
      :rules="['required']" />
    <ns-date-input name="registerDate" label="选择时间"
      has-time
      time-format="HH:mm"
      :minute-step="15"
      format="YYYY-MM-DD HH:mm"
      v-model="formData.registerDateTime"
      :rules="['required']" />
    <h3 class="my-lg">日期区间输入框</h3>
    <ns-date-range-input name="rangedDate" label="选择起止日期"
      hint="日期是这个"
      :width="300"
      v-model="formData.rangedDate"
      @change="onRangeDateInputChange"
      :rules="['required']">
    </ns-date-range-input>
    <h3 class="my-lg">月份输入框</h3>
    <ns-month-input name="registerMonth" label="选择月份"
      v-model="formData.registerMonth"
      variant="plain"
      :rules="['required']" />
    <h3 class="my-lg">年份输入框</h3>
    <ns-year-input name="registerYear" label="选择月份"
      v-model="formData.registerYear"
      variant="plain"
      :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  registerDate: '2023-09-01',
  registerDateTime: void 0,
  registerMonth: void 0,
  registerYear: void 0,
  rangedDate: void 0,
})

const onRangeDateInputChange = (value?: string[]) => {
  console.log('===onRangeDateInputChange value', value)
}
</script>
