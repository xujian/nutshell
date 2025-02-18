<template>
  <ns-input
    v-model="value"
    name="input"
    maxlength="50"
    hasCount
    :clearable="false"
    placeholder="请输入订单编号"
    label="订单编号" />

  <ns-input
    v-model="value"
    name="input"
    disabled
    placeholder="禁用输入"
    label="订单编号" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const value = ref('')
</script>
