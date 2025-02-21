<template>
  <ns-form v-model="form" >
    <ns-input label="订单号" v-model="form.order" name="order" placeholder="请输入订单号" :rules="[checkOrder]" />
  </ns-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const checkOrder = (value: string) => {
  console.log('===form custom validate', value)
  return value.startsWith('order-')
}

const form = reactive({
  order: '',
})
</script>
