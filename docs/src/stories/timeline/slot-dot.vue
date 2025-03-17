<template>
  <ns-timeline :data>
    <template #dot="{item}">
      <div class="dot">{{ item.title.substring(0, 1) }}</div>
    </template>
  </ns-timeline>
</template>
<script lang="ts" setup>
const data = [
  {
    title: '方案',
    time: '2023-08-17 11:28:54',
    caption: '可操作人：张小一,王小一,liuzhi'
  },
  {
    title: '初审',
    time: '2023-08-17 19:43:09',
    caption: '可操作人：张小一,王小一,liuzhi'
  },
  {
    title: '终止',
    status: 'off',
  },
  {
    title: '面签',
    status: 'off',
  },
  {
    title: '终审',
    status: 'off',
  },
  {
    title: '抵押',
    status: 'off',
  },
  {
    title: '放款',
    status: 'off',
  }
]
</script>
