<template>
  <ns-form ref="form" v-model="formData">
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
import { reactive, ref } from 'vue'

const emit = defineEmits(['complete', 'close']),
  form = ref()

type DemoComponentProps = {
  total: number,
  default?: number
}

const props = defineProps<DemoComponentProps>()

const formData = reactive<any>({
  amount: 0
})

const couldComplete = async () => {
  const result = await form.value.validate()
  return result.valid
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

defineExpose({
  couldComplete
})
</script>

<style lang="scss">
.exchange-card {
  width: 80vw;
}
</style>
