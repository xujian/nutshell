<template>
  <ns-dropdown :items="menuItems" fill="primary" label="排序">
    <template #icon>
      <CaretDownOutlined />
    </template>
  </ns-dropdown>

  <ns-dropdown :items="menuItems" fill="primary" label="排序">
    <template #icon>
      <DownOutlined />
    </template>
  </ns-dropdown>
</template>

<script lang="ts" setup>
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons-vue';

const menuItems = [
  { label: '一级选项', value: '1' },
  {
    label: '二级选项', value: '2', children: [
      { label: '二级级选项', value: '1-1', children: [{ label: '基础选项', value: '1-1-1' },] },
      { label: '二级级选项', value: '1-2' },
    ]
  },
  { label: '一级选项', value: '3' },
  { label: '一级选项', value: '4' },
]
</script>
