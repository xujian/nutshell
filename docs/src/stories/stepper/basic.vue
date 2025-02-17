<template>
  <ns-stepper
    v-model="step"
    :items />
</template>
<script lang='ts' setup>
import { ref } from 'vue'

const step = ref(2)
const items = [
  {
    title: '已完成'
  },
  {
    title: '进行中'
  },
  {
    title: '未进行'
  },
]
</script>
