<template>
  <ns-timeline class="slot-content-timeline" :data>
    <template #content="{item}">
      <div class="datetime text-neutral">处理时间: {{ item.time }}</div>
      <ns-card fill="#F7F8FA" foreground="#7E7E7E" style="margin-top: 10px;">
        <div><UserOutlined /> {{ item.user }}</div>
        <div style="padding-left: 18px">{{ item.caption }}</div>
      </ns-card>
    </template>
  </ns-timeline>
</template>

<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';

const data = [
  {
    title: '初审',
    time: '2023-08-17 11:28:54',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '初审',
    time: '2023-08-17 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '终止',
    time: '2023-08-19 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '面签',
    time: '2023-08-21 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '终审',
    time: '2023-08-23 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '抵押',
    time: '2023-08-24 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  },
  {
    title: '放款',
    time: '2023-08-25 19:43:09',
    caption: '这是一条处理描述这是一条处理描述这是一条处理描述这是一条处理描述',
    user: '黄炳宏'
  }
]
</script>

<style lang="scss">
.slot-content-timeline {
  width: 500px;
  .datetime {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
