<template>
  <ns-timeline :items="items">
    <template #content="{item}">
      <div class="content">
        <div class="caption" v-if="item.caption">节点状态: {{ item.caption }}</div>
        <div class="datetime text-neutral" v-if="item.itme">操作时间: {{ item.time }}</div>
      </div>
    </template>
  </ns-timeline>
</template>
<script lang="ts" setup>
const items = [
  {
    title: '方案',
    time: '2023-08-17 11:28:54',
    caption: '通过'
  },
  {
    title: '初审',
    time: '2023-08-17 19:43:09',
    caption: '未通过'
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
