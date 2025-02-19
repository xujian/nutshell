<template>
  <ns-form v-model="formData">
    <ns-number-input
      name="amount"
      label="金额"
      :maximumFractionDigits="2"
      has-daxie
      placeholder="请输入金额"
      v-model="formData.amount"
      :rules="['required', {
        method: (v: string) => Number(v) > 1000,
        message: '金额要大于1000'
      }]">
    </ns-number-input>

    <ns-number-range-input
      name="amount2"
      label="金额区间"
      :maximumFractionDigits="2"
      placeholder="请输入金额"
      v-model="formData.amount2">
      <template #append>
        <ns-button size="sm" color="primary" variant="outlined">检查</ns-button>
      </template>
    </ns-number-range-input>
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  amount: '',
  amount2: []
})
</script>
