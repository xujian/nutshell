<template>
  <ns-stepper
    :modelValue="1"
    :items="items" />
</template>
<script lang='ts' setup>
const items = [
  {
    title: '已完成',
    description: '这是描述'
  },
  {
    title: '进行中',
    description: '这是描述'
  },
  {
    title: '未进行',
    description: '这是描述'
  },
]
</script>
