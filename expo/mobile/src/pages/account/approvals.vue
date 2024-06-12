<template>
  <div class="page page-approvals">
    <page-header title="审批记录"></page-header>
    <ns-tabs v-model="tab" :items="tabs" />
  </div>
</template>

<script lang="ts" setup>
import { PageHeader } from '@uxda/appkit-next'
import { ref } from 'vue'

const tab = ref('tab1')

const tabs = [
  {
    value: 'tab1',
    label: '全部'
  },
  {
    value: 'tab2',
    label: '待审批'
  },
  {
    value: 'tab3',
    label: '审批通过'
  },
  {
    value: 'tab4',
    label: '有条件通过'
  },
  {
    value: 'tab5',
    label: '审批拒绝'
  }
]
</script>
