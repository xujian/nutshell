<template>
  <ns-form v-model="formData">
    <ns-date-input name="registerDateTime" label="选择带小时时间"
      has-time
      time-format="HH"
      format="YYYY-MM-DD HH:mm"
      v-model="formData.registerDateTime"
      :rules="['required']" />
    <ns-date-input name="registerDateTime1" label="选择带分钟时间"
      has-time
      time-format="HH:mm"
      :minute-step="15"
      format="YYYY-MM-DD HH:mm"
      v-model="formData.registerDateTime1"
      :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  registerDate: '2023-09-01',
  registerDateTime: void 0,
  registerDateTime1: void 0,
  registerMonth: void 0,
  registerYear: void 0,
  rangedDate: void 0,
})
</script>
