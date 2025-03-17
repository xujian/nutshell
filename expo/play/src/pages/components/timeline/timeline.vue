<template>
  <ns-page>
    <ns-page-header title="时间线" has-back-button />
    <ns-page-content>
      <h2>使用 items</h2>
      <ns-timeline :data v-model="current" />
      <h2>使用 slots</h2>
      <ns-timeline :data v-model="current">
        <template #content="{item}">
          <div class="content">
            <div class="caption" v-if="item.caption">节点状态: {{ item.caption }}</div>
            <div class="datetime text-neutral" v-if="item.itme">操作时间: {{ item.time }}</div>
          </div>
        </template>
      </ns-timeline>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const current = ref(2)

const data = [
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

