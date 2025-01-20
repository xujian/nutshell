<template>
  <ns-dropdown
    :items="menuItems"
    fill="primary"
    label="排序">
    <template #icon><DownOutlined /></template>
  </ns-dropdown>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';

const menuItems = [
  { label: '创建时间', value: 'created-time' },
  { label: '修改时间', value: 'modified-time' },
  { label: '结单时间', value: 'finished-time' },
]
</script>
