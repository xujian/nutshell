<template>
  <ns-tabs :items="items" />
</template>
<script lang="ts" setup>
const items = [
  {
    value: '1',
    label: '已完成',
  },
  {
    value: '2',
    label: '未完成',
  }
]
</script>
