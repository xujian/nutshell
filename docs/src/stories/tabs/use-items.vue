<template>
  <ns-tabs :items="items" />
</template>
<script lang="ts" setup>
const items = [
  {
    key: "1",
    tab: '已完成',
  },
  {
    key: '2',
    tab: '未完成',
  }
]
</script>
