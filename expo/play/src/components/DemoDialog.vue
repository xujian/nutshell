<template>
  <ns-form v-model="formData">
    <ns-number-input
      label="兑换金额"
      name="amount"
      class="amount-input"
      :maximum-fraction-digits="1"
      placeholder="请输入金额"
      v-model="formData.amount"
      :rules="['required', ...amountRules]"
    />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const emit = defineEmits(['complete', 'close'])

const props = defineProps({
  total: Number,
  default: 0
})

const formData = reactive<any>({
  amount: 0
})

const onOk = () => {
  emit('complete')
}

const onCancel = () => {
  emit('close')
}

const amountRules = [
  {
    name: 'functional',
    method: (v: number) => v > 0,
    message: '请输入兑换金额'
  },
  {
    name: 'functional',
    method: (v: number) => v <= props.total,
    message: '兑换金额超过了最大可兑换金额'
  }
]
</script>

<style lang="scss">
.exchange-card {
  width: 80vw;
}
</style>
