<template>
  <ns-form v-model="formData">
    <ns-date-input name="registerDateTime" label="禁用当前日期前的时间"
      format="YYYY-MM-DD HH:mm:ss"
      v-model="formData.registerDateTime"
      :disabledDate="disabledPrevDate"
      :rules="['required']" />
    <ns-date-input name="registerDateTime" label="禁用时间组件"
      format="YYYY-MM-DD HH:mm:ss"
      v-model="formData.registerDateTime"
      disabled
      :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import dayjs, { Dayjs } from 'dayjs';
import { reactive, ref } from 'vue'

const formData = reactive({
  registerDate: '2023-09-01',
  registerDateTime: void 0,
  registerDateTime1: void 0,
  registerMonth: void 0,
  registerYear: void 0,
  rangedDate: void 0,
})

// 禁止选择今天往前的日期
function disabledPrevDate(current: Dayjs) {
    return current && dayjs().isAfter(current, 'day')
  }
</script>
