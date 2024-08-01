<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()

const tabs = [
  {
    value: 'tab1',
    label: '未拨打'
  },
  {
    value: 'tab2',
    label: '需跟进'
  },
  {
    value: 'tab3',
    label: '即将掉落公海'
  },
  {
    value: 'tab4',
    label: '异常'
  },
  {
    value: 'tab5',
    label: '需反馈'
  },
  {
    value: 'tab6',
    label: '今日上门'
  },
  {
    value: 'tab7',
    label: '新客户'
  }
]
</script>

<template>
  <ns-column :gap="10" align="start">
    <ns-button-group v-model="value" :options="tabs" />
    <ns-button-group
      v-model="value"
      round
      variant="solid"
      color="primary"
      :options="tabs" />
    <ns-button-group
      v-model="value"
      round
      variant="soft"
      color="primary"
      :options="tabs" />
    <ns-button-group
      v-model="value"
      round
      variant="outlined"
      color="primary"
      :options="tabs" />
  </ns-column>
</template>
