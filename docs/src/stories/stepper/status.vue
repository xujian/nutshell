<template>
  <ns-stepper
    status="error"
    :modelValue="1"
    :items="items" />
</template>
<script lang='ts' setup>
const items = [
  {
    title: '已完成'
  },
  {
    title: '终止'
  },
  {
    title: '未进行'
  },
]
</script>
