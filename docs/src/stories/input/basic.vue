<template>
  <ns-input
    v-model="value"
    name="input"
    placeholder="请输入订单编号"
    label="订单编号" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const value = ref('')
</script>
